# _Ping-Pong Counting Game_

#### _A website that counts in accordance to a popular drinking game, 1/20/2017_

#### By _**Carlos Muñoz Kampff**_

## Description

_This website is an aid to explaining how to play the Ping-Pong drinking game. The user can input any count and the site will return the proper count following the rules of the game._

## Specifications

| Desired Behavior  | Input Example | Output Example |
| :------------- | :-------------: | -------------:|
| 1) When user inputs 2 the page will return an incremental count to 2.  | 2 | 1 , 2 |
| 2) When user inputs 3 the page will return an incremental count to 3 but replace the number three with "Ping!" | 3 | 1,2,Ping!|
| 3) When user inputs 5 the page will return an incremental count to 5 but replace the numbers three and five with "Ping!" and "Pong!" respectively| 5 | 1,2,Ping!,4,Pong!|
| 4) When user inputs 10 the page will return an incremental count to 10 but replace the numbers three, five and their multiples with "Ping!" and "Pong" respectively.| 10 | 1,2,Ping!,4,Pong!,Ping!, 7, 8, Ping!,Pong! |
| 5) When user inputs 15 the page will return an incremental count to 15 but replace the numbers 3, 5, 15 and their multiples with "Ping!", "Pong!", and "Ping-Pong!" respectively.| 15 | 1,2,Ping!,4,Pong!,Ping!, 7, 8, Ping!,Pong!,11,Ping!,13,14,Ping-Pong!|
| 6) It responds to unwanted input types. | "banana" | page alerts("please input an integer and submit again.")|
* End Specifications.


## Setup/Installation Requirements

* _Download a current browser (we used Chrome and Firefox)._
* _input url: https://elmunoz42.github.io/Ping-Pong/_
* _go to my github repository at https://github.com/elmunoz42/Ping-Pong/tree/master_
* _follow page instructions to clone the repository._
* _open in Atom or similar application._

_Follow the above instructions or use the bash terminal and type: git clone https://github.com/elmunoz42/Ping-Pong/tree/master . This will sometimes work better than downloading.

## Known Bugs

_There are no known bugs in the master branch. Please feel free to notify me at elmunoz42@gmail.com if you find any bugs. The rhythm-ping-pong branch has a bug in that while it is seemingly processing the input in the correct rhythmical fashion (one frame per second) it was only outputting to the DOM after the function processed all the results. _

## Support and contact details

_I will happily clarify any issues. Please free to email me at elmunoz42@gmail.com if you have any issues with the website or need assistance drinking your beverage of choice._

## Technologies Used

_ JavaScript, jQuery, Bootstrap_

### License

*MIT*

Copyright (c) 2017 **_Carlos Muñoz Kampff_**
