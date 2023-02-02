import React, { useEffect, useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user-dotty");
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      setCurrentUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  const updateUser = async () => {
    try {
      const jsonData = JSON.stringify(currentUser);
      await AsyncStorage.setItem("user-dotty", jsonData);
    } catch (e) {
      console.log(e);
    }
  };

  const bookmarkArticle = (item, category) => {
    if (currentUser.bookmarks.includes(item)) {
      return;
    }
    setCurrentUser({
      ...currentUser,
      bookmarks: [...currentUser.bookmarks, { ...item, category: category }],
    });
    console.log(currentUser.bookmarks);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    updateUser();
  }, [currentUser]);

  return (
    <GlobalContext.Provider
      value={{ currentUser, setCurrentUser, bookmarkArticle }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
