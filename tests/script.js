// Call ISIMI
isimi({
  holidays: [
    {
      day: 21,
      month: "august",
      stylesheet: "/tests/styles/today.css"
    },
    {
      startDate: {
        day: 20,
        month: 9,
      },
      stopDate: {
        day: 28,
        month: 9,
      },
      stylesheet: "/tests/styles/aprilFool.css"
    },

    {
      startDate: {
        day: 21,
        month: 10,
      },
      stopDate: {
        day: 22,
        month: 10,
      },
      stylesheet: "/tests/styles/birthday.css"
    },

    {
      name: "halloween",
      stylesheet: "/tests/styles/halloween.css"
    }

  ]
});
