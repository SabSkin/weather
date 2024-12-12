import { useState } from "react";
import { createContext } from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./Input.module.css";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [text, setText] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Ваш город:"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit" className={styles.iconPlus}>
          <IoSearch className={styles.icon} />
        </button>
      </form>
      <InputContext.Provider value={{ text }}>{children}</InputContext.Provider>
    </div>
  );
};
