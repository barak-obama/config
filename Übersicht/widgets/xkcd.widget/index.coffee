uebersicht = require 'uebersicht'


# command: "curl --silent https://xkcd.com/info.0.json"
# import { run } from 'uebersicht'
command: "cat /Users/obama/.config/Übersicht/widgets/xkcd.widget/xkcd.json"




# Set the refresh frequency (milliseconds) to every 6 hours
# refreshFrequency: 21600000
refreshFrequency: false

# Render the output.

render: (output) -> """
  <div class="wrapper" id='container'>
  <div>
"""
update: (output, domEl) ->
  xkcd = JSON.parse(output)
  container = $(domEl).find('#container')
  content ="""
    
    <div id="img">
      <h2> #{xkcd.title} </h2>
      <img src="#{xkcd.img}" />
    </div>
    <div class="child"><div> #{xkcd.alt} </div></div>
    """
  console.log($(container))
  $(domEl).off()
  $(domEl).on 'click', ->
      # $(container).css "background", "blue"
      uebersicht.run("open https://xkcd.com/#{xkcd.num}/")
  $(container).html content
  # console.log $(container)

  

# CSS Style
style: """

  left:10px;
  bottom: 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 18px;

.wrapper > div {
  text-align:center
  margin: 15px;
   
}

img {
  max-width:600px;
  max-height:600px;
  
}


.child {
  display: flex;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  
}

.child div {
  text-align:center
  flex-grow: 1;
  width: 0;
  margin: 5px 7px 5px 7px;
}

.wrapper {
  display: inline-block;
}
"""
 #max-height:600px;