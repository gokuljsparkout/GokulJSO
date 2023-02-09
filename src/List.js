

const people = [
  'Tony Stark     : Scientist',
  'Heisenberg     : Chemist',
  'Bin Laden      : Terrorist',
  'Vijay Kumar    : Police Officer',
  'Monkey D Luffy : Pirate'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
