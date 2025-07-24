import { useState} from "react";

const TermperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const formatValue = (value) => {
    if (value === "") return "";
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return value;

    if (Number.isInteger(numValue)) return numValue.toString();

    return numValue.toFixed(2);
  };

  return (
    <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
      <h1>Temperature Converter</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <Label>Celcius</Label>
        <Input
          id="celsius"
          type="number"
          value={formatValue(celsius)}
          onChange={() => {}}
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default TermperatureConverter;
