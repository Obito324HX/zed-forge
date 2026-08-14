export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Chanda Simbaya",
    role: "Creative Lead",
    initials: "CS",
    photo: "/team/chanda-simbaya.jpg"
  },
  {
    name: "Cletus Bwalya",
    role: "Lead Developer",
    initials: "CB"
  },
  {
    name: "Sharon Mutale",
    role: "Marketing Director",
    initials: "SM",
    photo: "/team/sharon-mutale.jpg"
  }
];
