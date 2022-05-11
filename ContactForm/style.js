import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  contactForm: {
    width: "100%",
    height: 540,
    paddingBottom: 100,
    paddingTop: 100,
    display: "flex",
    justifyContent: "center",
  },
  bigCont: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    height: "inherit",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 30,
    fontWeight: 400,
    marginBottom: 30,
  },
  subTitle: {
    margin: "10px 0",
    width: 400,
    height: 50,
    display: "flex",
    alignItems: "center",
  },
  iconBox: {
    backgroundColor: (dark) => (dark ? "#fff" : "#E6E4E4"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 20,
  },
  icon: {
    color: "#222",
  },
  /*form */
  formBox: {
    width: 860,
    height: 420,
  },
  topForm: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  topBoxField: {
    width: 400,
  },
  subject: {
    width: "100%",
    marginBottom: 15,
  },
  multiline: {
    width: "100%",
    marginBottom: 15,
  },
  btnSub: {
    width: 200,
    height: 50,
    borderRadius: 50,
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 50,
    color: "white",
    background: "linear-gradient(to right, #fdc830, #f37335)",
    transition: "all 0.3s ease-in",
    "&:hover": {
      background: "linear-gradient(to left, #fdc830, #f37335)",
    },
  },
}));
