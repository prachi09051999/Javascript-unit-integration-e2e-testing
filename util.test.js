const { generateText, validateInput, checkAndGenerate } = require('./util');
const puppeteer = require('puppeteer');

// Unit test for generateText Function in util.js file
test('should output name and age',()=>{

  // First Text value
  let text = generateText('Prachi',22);
  expect(text).toBe('Prachi (22 years old)');

  // Second Text value to make sure function is dynamically generating the text
  text = generateText('Akanksha',19);
  expect(text).toBe('Akanksha (19 years old)')

});

// Another Unit Test for validateInput Function
test('should validate input values',()=>{

  // String Input Value Check
  let value = validateInput('Aisha',true,false);
  expect(value).toBe(true);

  // Number Input Value Check
  value = validateInput('25',true,true);
  expect(value).toBe(true);

  // Empty Input Value Check
  value = validateInput('',true,false);
  expect(value).toBe(false);
});

// An Integration Testcase for checkAndGenerate function
test('should check input and generate correct output',()=>{

  let generatedOutput = checkAndGenerate('Mona',28);
  expect(generatedOutput).toBe('Mona (28 years old)');
});

// An end to end test case to input a valid value and graphical interface
test('should be able to input a valid name-age pair',async ()=>{
const browser = await puppeteer.launch({
  headless: false,
  slowMo: 80,
  args: ['--window-size=1920,1080']
});
const page = await browser.newPage();
await page.goto('file:///Users/prachitripathi/Documents/tutorials/testing-types-and-practice/js-testing-introduction-starting-setup/index.html');
await page.click('input#name');
await page.type('input#name','Lalita');
await page.click('input#age');
await page.type('input#age','45');
await page.click('#btnAddUser');
const finalText = await page.$eval('.user-item',el => el.textContent);
expect(finalText).toBe('Lalita (45 years old)');
},10000);