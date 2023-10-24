import React, { useState } from "react";
import { Select, Input, Checkbox, Table } from "antd";

const { Option } = Select;

const delayReasons = [
  {
    code: "WP",
    reason: "This is Reason 1",
  },
  {
    code: "WA",
    reason: "This is Reason 2",
  },
  {
    code: "WX",
    reason: "This is Reason 3",
  },
  {
    code: "WC",
    reason: "This is Reason 4",
  },
];

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Reason",
    dataIndex: "reason",
    key: "reason",
  },
];

function SelectWithInput() {
  console.log("render");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  // =====================================VALIDATION===========================
  const totalDelay = "0014";

  const parts = inputValue.split("/");

  // Filter and convert parts to numbers
  const numberArray = parts.filter((part) => part !== ""); // Remove empty strings
  // .map((part) => parseInt(part, 10)); // Convert to integers

  const sumDelay = numberArray.reduce((acc, num) => acc + Number(num), 0);

  console.log("selectedOptions", selectedOptions);

  const dataSource = selectedOptions.map((item, index) => {
    return {
      key: item,
      code: item,
      time: numberArray[index],
      reason: delayReasons.find((reason) => reason.code === item).reason,
    };
  });

  console.log(dataSource);

  // =====================================VALIDATION END===========================
  const handleSelectChange = (value) => {
    setSelectedOptions(value);
    setInputValue("");
  };

  function handleInputChange(e) {
    const value = e.target.value;

    setInputValue(value);
    const regex = /^(?:\/\d{4})+$/;

    if (regex.test(value)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <p>
        Total Delay: <strong>{totalDelay}</strong>
      </p>
      <div style={{ display: "flex" }}>
        <Select
          mode="multiple"
          tagRender={() => ""}
          style={{ width: "310px" }}
          onChange={handleSelectChange}
          value={selectedOptions}
          showSearch={false}
          menuItemSelectedIcon={""}
        >
          {delayReasons.map((reason) => {
            return (
              <Option key={reason.code} value={reason.code}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    style={{ marginRight: "4px" }}
                    checked={
                      selectedOptions.includes(reason.code) ? true : false
                    }
                  />
                  <span style={{ margin: "0 12px" }}>{reason.code}</span>
                  <span style={{ whiteSpace: "normal" }}>{reason.reason}</span>
                </div>
              </Option>
            );
          })}
        </Select>
        <div
          style={{
            width: "270px",
            position: "absolute",
            border: "1px 0 1px 1px solid #d9d9d9",
            borderRadius: "6px 0 0 6px",
            display: "flex",
            alignItems: "center",
            padding: "4px",
          }}
        >
          <div
            style={{
              fontSize: "14.5px",
              height: "22px",
              margin: "auto",
            }}
          >
            <p style={{ margin: "0", lineHeight: "22px" }}>
              {selectedOptions.join("/")}
            </p>
          </div>
          <Input
            style={{
              border: "none",
              padding: "0",
              borderRadius: "0",
              // backgroundColor: "yellow",
            }}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <p style={{ color: "red" }}>
        {selectedOptions.length === 0 && numberArray.length === 0
          ? ""
          : !isError && numberArray.length === selectedOptions.length
          ? totalDelay - sumDelay < 0
            ? "Invalid delay time"
            : totalDelay - sumDelay === 0
            ? "Valid delay time"
            : `${Number(totalDelay) - sumDelay} ${
                Number(totalDelay) - sumDelay === 1
                  ? "minute is"
                  : "minutes are"
              } pending`
          : "Invalid delay time"}
      </p>
      <Table
        style={{ width: "50%" }}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}

export default SelectWithInput;
