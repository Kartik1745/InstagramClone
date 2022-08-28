import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
  const commentsOne = [
    {
      user: "Omkar",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "Akash",
      text: "Like!",
      id: 2,
    },
    {
      user: "Spidy",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "Spidy",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "Avengers",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="Tom holland"
        storyBorder={true}
        image="https://picsum.photos/id/237/200/300"
        comments={commentsOne}
        likedByText="Bond007"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="Rowan Atkinson"
        image="https://picsum.photos/seed/picsum/200/300"
        comments={commentsTwo}
        likedByText="Kunal"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="Winter"
        storyBorder={true}
        image="https://picsum.photos/seed/picsum/200/1011"
        comments={commentsThree}
        likedByText="Ashu"
        likedByNumber={90}
        hours={4}
      />
    </div>
  );
}

export default Cards;