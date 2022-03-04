import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Carousel from 'react-material-ui-carousel'

function Item(props: any)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}


const Home: NextPage = () => {
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]
  return (
    <div>
      <main>
        <h1>
          Welcome to <a>Home</a>
        </h1>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      </main>
    </div>
  );
};

export default Home;
