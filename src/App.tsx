import SideBar from "./components/Sidebar/SideBar";
import React from "react";
import Chat from "components/ChatScreen/Chat";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "redux/mainReducer";
import LoginPage from "components/Login/LoginPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "redux/Slices/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      const userData = {
        uid: authUser!.uid,
        photo: authUser!.photoURL,
        email: authUser!.email,
        displayName: authUser!.displayName,
      };

      if (authUser) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user.userInfo ? (
        <div style={{ display: "flex" }}>
          <SideBar />
          <Chat />
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
