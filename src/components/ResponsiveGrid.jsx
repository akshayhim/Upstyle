import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const [users, setUsers] = React.useState([]);
  const [userShow, setUserShow] = React.useState(true);

  const getUsers = async () => {
    try{
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonResponse = await response.json();
      const jsonArray = jsonResponse.data;
      setUsers(jsonArray);
      // Here set loading to true
    } catch (e) {
      console.log(e);
    }
  };



  return (
    <>
      <Button
        onClick={() => {
          setUserShow(!userShow);
          userShow && getUsers();          
        }}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Get Users
      </Button>
      <Box className="box" sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {users.map(({ id, email, first_name, last_name, avatar }) => (
          <Grid item xs={2} sm={4} md={4} key={id}>
            <Item>
              <img className="whitet" src={avatar} alt="" />
              <br />
              <span>{first_name} {last_name}</span>
              <br />
              <span>{email}</span>
            </Item>
          </Grid>
        ))}
        ]
      </Grid>
    </Box>;

    </>
  );
}
