#! /usr/local/bin/python


import argparse
import copy
import json

def find_cycles_and_duplicates(file_path):
    bindings = {}
    cycles = []
    bind_tree = {}

    def process_bind_file(file_path, line_number, path, bind_tree):
        path.append((file_path, line_number))
        bind_tree[file_path] = {}

        if file_path in (file for file, _ in path[:-1]):
            cycle_start = [i for i, (file, _) in enumerate(path) if file == file_path][0]
            cycles.append(path[cycle_start:])
            return


        with open(file_path, 'r') as f:
            for i, line in enumerate(f, start=1):
                if line.startswith('\\bind_file'):
                    imported_file_path = line.split()[1].strip()
                    process_bind_file(imported_file_path, i, copy.copy(path), bind_tree[file_path])
                elif line.startswith('\\bind'):
                    _, key_bind, _, command, _ = line.split('"', maxsplit=4)

                    key_bind = key_bind.strip()
                    command = command.strip()

                    if key_bind in bindings:
                        bindings[key_bind].append((file_path, command, i))
                    else:
                        bindings[key_bind] = [(file_path, command, i)]

    process_bind_file(file_path, 0, [], bind_tree)

    return cycles, bindings, bind_tree

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('file', help='Path to the binding file')
    args = parser.parse_args()

    cycles, duplicates, bind_tree = find_cycles_and_duplicates(args.file)

    print(json.dumps(bind_tree, indent=4, sort_keys=True))

    print("Cycles:")
    for cycle in cycles:
        print("-" * 40)
        for file, line in cycle:
            if line==0:
                print(file, end="")
            else:
                print(f" --{line}--> {file}", end="")
    if not cycles:
        print("No cycles found.")

    has_duplicates_flag = 0
    print("\nDuplicates:")
    for key_bind, bindings in duplicates.items():
        if len(bindings) == 1:
            continue
        has_duplicates_flag = 1
        print("-" * 40)
        print(f"Key-Bind: {key_bind}")
        for file, command ,line in bindings:
            print(f"\tFile: {file}, Line: {line}, Command: \"{command}\"")

    if not has_duplicates_flag:
        print("No duplicates found.")
