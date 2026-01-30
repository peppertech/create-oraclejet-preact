import { useState, useCallback } from "preact/hooks";
import { Button } from "@oracle/oraclejet-preact/UNSAFE_Button";
import { InputText } from "@oracle/oraclejet-preact/UNSAFE_InputText";
import "./style.css";

const Testing = () => {
  const [value, setValue] = useState<string | undefined>("The answer is 42");
  const handleInput = useCallback((detail) => {
    setValue(detail.value);
  }, []);
  return (
    <div class="testing">
      <section>
        <h1>404: Not Found</h1>
        <p>It's gone :(</p>
        <Button
          label="Click Me"
          onAction={() => alert("this was clicked")}
          variant="danger"
        />
        <br />
        <br />
        <InputText
          label="Tell me something!"
          value={value}
          onInput={handleInput}
        ></InputText>
      </section>
    </div>
  );
};
export default Testing;
