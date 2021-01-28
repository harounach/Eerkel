import "./Home.scss";
import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ChatroomForm from "../../Components/ChatroomForm";
import Message from "../../Components/Message";
import HomeFriends from "../../Components/HomeFriends";

function Home() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="home-section">
          <section className="chat-section">
            <ul className="chatroom">
              <Message message="Hello, there!" key="1" />
              <Message
                message="Would you like to order a pizza or a sandwitch?"
                key="2"
              />
              <Message
                message="If you want to fade in the tooltip text when it is about to be visible, you can use the CSS transition property together with the opacity property, and go from being completely invisible to 100% visible, in a number of specified seconds (1 second in our example):"
                key="3"
              />
              <Message message="Hello, there!" key="4" />
            </ul>
            <ChatroomForm />
          </section>
          <aside className="home-fl-section">
            <h2 className="home-fl__title">Friend List</h2>
            <HomeFriends />
            <div className="home-fl__btn-container">
              <button className="home-fl__add-btn">Add Friend</button>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Home;
