import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/Select/MySelect";
import { IFilter } from "../types/types";

const PostFilter = ({ filter, setFilter }: IFilter) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: event.target.value });
    console.log({ ...filter, query: event.target.value });
  };

  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort: any) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort by..."
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
