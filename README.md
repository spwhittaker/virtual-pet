# Project Title

This is a project to make a virtual pet that is similar to --but legally distinct from--a Tamagotchi. It gets older, needs to exercise and eat, and should try to avoid dying. This information is stored in some objects.

## Getting Started

Just download the repo and run 'npm install' in your favourite terminal; then you should be good to go. 

### Prerequisites

You will need Node, Jest, NPM and a web browser.

### Installing

Run 'npm install' in your favourite terminal and load up pet.js in your favourite browser 

## Tests

You can run 'npm install -D jest' if you want to run through the software tests.

They can then be run using 'npm test'.

You can test that pets are created, can be fed, can't go above max fitness, can die, have children and more. 

e.g. 

it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

## Contributing

Please [email me](mailto:stephenwhittaker23@gmail.com) or log an issue.

## Author

**Stephen Whittaker** - [spwhittaker](https://github.com/spwhittaker)

See also the list of [contributors](https://github.com/spwhittaker/virtual-pet/graphs/contributors) who participated in this project.

## Acknowledgements

Thank you to:

* Manchester Codes (https://github.com/MCRcodes), for the materials on how to code this little guy
* Aki Maita, for creating the Tamagotchi
* Sam Millward (https://github.com/samueljmillward/), for pairing with me 

