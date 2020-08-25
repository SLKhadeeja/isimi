# isimi

A package to help seamlessly integrate different holidays into your webapp.

## Installation

- Install Yarn

```bash
   yarn install isimi
```

## Usage
```
isimi({ holidays: [ {}, {}, {} ] }) //general syntax

```

### Supported event format

//Using day and month
```
    {
      day: 21,
      month: 7,
      stylesheet: "/tests/styles/today.css"
    }
```

Using the startDate and stopDate objects for events spanning over days

```
    {
      startDate: {
        day: 24,
        month: 7,
      },

      stopDate: {
        day: 28,
        month: 7,
      },

      stylesheet: "/tests/styles/aprilFool.css"
    }
```
isimi also supports calling popular holidays by name
```
    {
      name: "halloween",
      stylesheet: "/tests/styles/halloween.css"
    }

```

### Holiday names isimi understands

``` "christmas"```
``` "halloween"```
``` "aprilfool"```

## Running

```bash
  yarn build --watch
```
