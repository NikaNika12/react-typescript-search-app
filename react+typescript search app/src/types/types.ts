import React from "react";

export interface IFilter {
  filter: any;
  setFilter: any;
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  id?: string;
  value?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export interface IPosts {
  id: number;
  title: string;
  body: string;
}
