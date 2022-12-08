# Identifying trenches - Assessment

You have been assigned to work with an undersea explorer who is attempting to
identify and map undersea trenches.  The explorer has provided you with several
data sets of sonar readings in this format:

```js
// Example 1
sonar = [
        [-5,-5,-5,-5,-5],
        [-5,-8,-8,-9,-7],
        [-5,-5,-5,-5,-8],
        [-5,-5,-5,-5,-5]
        ]
```

Depending on the scan, the provided matrix may be larger or smaller, but it will
always be rectangular.  Your task is to determine if a given data set contains a
trench by comparing each node and their neighbors and determining if there is a
pattern that matches the defined properties of a trench.

Neighbors are considered to be nodes that are directly above, below, or to
the side.  **No diagonals**!

A trench has the following three properties:

1. It has a length of **three or more** nodes that are neighbors.
1. Each node in the trench must be **deeper than -5**.
1. Trenches may **not** branch into (any form of) a "T" shape.  A node with more than **two neighbors** will result in branching "T" shape.

![valid-invalid-trenches]

This problem literally has edge cases!  After discussing the matter with the
explorer, you have agreed that potential trenches that otherwise meet the rules
as a trench are valid, even if part of it is on the edge of the data set, and it
can't be fully determined if those nodes follow the rules.

A few examples:

```js
// Example 1
sonar_1 = [
          [-5,-5,-5,-5,-5],
          [-5,-8,-8,-9,-7],
          [-5,-5,-5,-5,-8],
          [-5,-5,-5,-5,-5]
          ]
```

**Example 1 has a trench**.  The nodes containing -8, -8, -9, -7, -8 meet the rules.
This is an edge case trench, because the nodes containing -7 and -8 are on the
edge of the data set.

```js
// Example 2
sonar_2 = [
          [-5,-5,-5,-7,-5],
          [-5,-8,-8,-9,-5],
          [-5,-5,-5,-7,-5],
          [-5,-5,-5,-5,-5]
          ]
```

**Example 2 does not have a trench**.  The node containing -9 has three neighbors with a
depth below -5. This would create a "T" shaped trench, which is not valid.

```js
// Example 3
sonar_3 = [
          [-5,-5,-5,-5,-5],
          [-5,-5,-5,-5,-5],
          [-5,-9,-9,-5,-5],
          [-5,-5,-5,-5,-5]
          ]
```

**Example 3 does not have a trench**.  There are two nodes that are next to one
another and are deeper than -5, but a trench must have at least 3 total nodes to
be a trench.

## Instructions

1. Clone the assessment repository from the starter.
2. Rename the folder to `your-name-pt-12-graphs-identifying-trenches`
3. `npm install` to install any dependencies
4. Fill out code in `identifying_trenches.js`
5. Uncomment the marked code and run `node identifying_trenches.js` to run local
   test cases
6. `npm test` to run the test specs

## Submission

When you are ready to submit:

1. Re-run all unit tests and fix any syntax errors that are crashing the tests.
If the unit tests crash, or do not run, you will receive a zero for the coding
portion of the assessment
2. Delete the `node_modules` directory
3. Zip up your folder
4. Upload it

[valid-invalid-trenches]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Module-Assessments/assets/valid-invalid-trenches.svg