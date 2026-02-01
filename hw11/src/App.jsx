import "./App.css";
import Article from "./components/article";
import List from "./components/list";
import Main from "./components/main";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";

function App() {
  const articles = [
    {
      id: 1,
      title: "The Beauty of Silence",
      path: "/list/1",
      body: "In a world filled with constant noise, silence has become a rare treasure. Silence allows people to slow down, reflect, and connect with their inner thoughts. It is in these quiet moments that creativity often flourishes and emotions become clearer. Silence is not just the absence of sound; it is a presence of peace. Listenin Moreover, silence helps improve relationships. By listening carefully without immediately responding, people can understand each other bett In conclusion, embracing silence is not about withdrawing from the world; it is about creating space for thought, creativity, and meaningful connections. In the midst of chaos, silence becomes a gentle reminder of what really mat",
    },
    {
      id: 2,
      title: "The influence of dreams",
      path: "/list/2",
      body: "Dreams are more than just images that appear during sleep. They are reflections of our thoughts, desires, and fears. Sometimes, dreams are mysterious and confusing, yet they often inspire creativity and self-discovery.Throughout history, dreams have influenced art, science, and literature. From famous paintings to scientific inventions, many ideas started as visions in the mind that were nurtured and explored. Dreams allow people to see beyond the limitations of reality, offering new perspect On a personal level, dreams can help us understand ourselves. They reveal emotions we may not fully recognize while awake, giving insight into our hopes and anxieties. By paying attention to them, people can learn about their inner world and make thoughtful decisions in life.",
    },
  ];

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List arr={articles} />} />
        <Route path="/list/:id" element={<Article arr={articles} />} />
      </Routes>
    </>
  );
}

export default App;
