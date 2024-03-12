import { MdSportsVolleyball } from "react-icons/md";
import { FiMusic } from "react-icons/fi";
import { FaPaintBrush } from "react-icons/fa";
import { ActivityCard } from "./activities-card";
export function Activies() {
  return (
    <>
      <ActivityCard
        title="Sport"
        description="  Sports are games such as football
           and other leisure activities which  need physical effort
          and skill "
        icon={MdSportsVolleyball}
      />
      <ActivityCard
        title="Music"
        description="Music is expresses ideas and
         emotions in significant from through
        the elements af rhythem and melody. "
        icon={FiMusic}
      />
      <ActivityCard
        title="Painting"
        description="Painting is the expression or
      application of human creative skill and imagination in a
      visual from."
        icon={FaPaintBrush}
      />
    </>
  );
}
