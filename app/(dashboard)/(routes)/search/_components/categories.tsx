"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFlashOn,
  FcTodoList,
  FcDataConfiguration,
  FcOldTimeCamera,
  FcProcess,
  FcMultipleDevices,
  FcMoneyTransfer,
  FcAssistant,
  FcCollaboration
} from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Back End": FcDataConfiguration,
  "Front End": FcMultipleDevices,
  "Design": FcOldTimeCamera,
  "QA": FcProcess,
  "Project Management": FcTodoList,
  "Marketing": FcFlashOn,
  "Engineering": FcEngineering,
  "Sales": FcMoneyTransfer,
  "Human Resources": FcCollaboration,
  "Strategists": FcAssistant,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}