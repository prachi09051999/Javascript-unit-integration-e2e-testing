# Javascript-unit-integration-e2e-testing
examples of javascript unit testing,integration testing and end to end testing using jest and puppeteer -><br>
Unit testing ->  a software development process in which the smallest testable parts of an application, <br>
                 called units, are individually and independently scrutinized for proper operation.<br>
                 In util.test.js, generateText and validateInput functions have been tested as Unit Testing.<br>
Integration Testing -> a phase in software testing in which individual software modules are combined and tested as a group<br>
                       In util.test.js, checkAndGenerate function calls above 2 functions tested using Unit Testing so it is<br>
                       a combined group of program and has been tested as Integration Testing.<br>
End To End Testing -> a methodology used in the software development lifecycle (SDLC) to test the functionality and performance.<br>
                      of an application under product-like circumstances and data to replicate live settings.<br>
                      We can also manipulate DOM in E2E testing.<br>
                      In util.test.js, We have launched a new tab using Puppeteer, clicked in both input fields and typed values <br>
                      automatically and tested the generated value. These all operations of launching the tab and entering values <br>
                      will be asynchronous and will use await for each step.<br>
Puppeteer ->  It is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol.                  
