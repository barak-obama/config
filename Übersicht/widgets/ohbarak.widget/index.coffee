uebersicht = require 'uebersicht'
# sound = require 'sound-play';
# import {playAudioFile} from 'audic';



# command: "curl --silent https://xkcd.com/info.0.json"
# import { run } from 'uebersicht'
command: "curl -s https://ohbarak.com/ | /opt/homebrew/bin/htmlq -t \"body > :nth-last-child(1)\" | sed -n '2 p' | cut -c24- | rev | cut -c2- | rev"




# Set the refresh frequency (milliseconds) to every 6 hours
# refreshFrequency: 21600000
refreshFrequency: 21600000

# Render the output.

render: (output) -> """
    

    <link rel="stylesheet" href="/ohbarak.widget/styles/styles.css">

    <div class="center">
    <div class="button center_horizontally" id="ohbarak">oh barak</div><br><br>
    <div class="center_horizontally"><input type="checkbox" id="nsfw"> Include NSFW</div>
    </div>

    <script id="to-fill">
        
    </script>

"""
update: (output, domEl) ->
    # console.log(output)
    all_ohbaraks = JSON.parse(output)
    ohbaraks_sfw = all_ohbaraks.filter( (ohbarak) -> !ohbarak.nsfw);
    ohbaraks = ohbaraks_sfw;


    button = $(domEl).find("#ohbarak")

    button.off()

    

    button.on 'click', ->

        ohbarak = ohbaraks[Math.floor(Math.random()*ohbaraks.length)];

        uebersicht.run("/Users/obama/.config/Übersicht/widgets/ohbarak.widget/play \"#{ohbarak.url}\"")

    checkbox = $(domEl).find("#nsfw")
    # console.log(checkbox)
    checkbox.off()

    checkbox.on 'change', ->
        if (checkbox.is(':checked'))
            ohbaraks = all_ohbaraks;
        else
            ohbaraks = ohbaraks_sfw;

        console.log(ohbaraks.length)
        
  


style: """

    right: 10px;
    bottom: 10px;

    background: rgba(255, 255, 255, 0.3);
    border-radius: 18px;
    height: 300px;
    border: none;

    .center {
        margin: 20px 20px 20px 20px;
    }
    
    
        
    
"""