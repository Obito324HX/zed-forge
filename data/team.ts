export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Chanda Simbaya",
    role: "Founder",
    initials: "CS",
    photo: "/team/chanda-simbaya.jpg"
  },
  {
    name: "Cletus Bwalya",
    role: "Co-Founder",
    initials: "CB"
  },
  {
    name: "Sharon Mutale",
    role: "Brand Ambassador",
    initials: "SM",
    photo: "/team/sharon-mutale.jpg"
  }
];
