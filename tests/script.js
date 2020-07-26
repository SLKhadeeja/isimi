// Call ISIMI
isimi({
  holidays: [
    {
      day: 21,
      month: 7,
      stylesheet: "/tests/styles/today.css"
    },

    {
      startDate: {
        day: 14,
        month: 7,
      },
      stopDate: {
        day: 20,
        month: 7,
      },
      stylesheet: "/tests/styles/birthday.css"
    },

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
    },

    {
      name: "halloween",
      stylesheet: "/tests/styles/halloween.css"
    }

  ]
});
