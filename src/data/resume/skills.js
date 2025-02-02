const skills = [
  {
    title: 'Python',
    competency: 4,
    category: ['Programming Languages', 'Proficient'],
  },
  {
    title: 'Ruby',
    competency: 5,
    category: ['Programming Languages', 'Proficient'],
  },
  {
    title: 'GitHub',
    competency: 4,
    category: ['Technologies'],
  },
  {
    title: 'Jira',
    competency: 5,
    category: ['Technologies'],
  },
  {
    title: 'Linux/Unix',
    competency: 5,
    category: ['Technologies'],
  },
  {
    title: 'Visual Studio Code',
    competency: 5,
    category: ['Technologies'],
  },
  {
    title: 'Perl',
    competency: 5,
    category: ['Programming Languages', 'Proficient'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Programming Languages', 'Proficient'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Programming Languages', 'Prior Experience'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Programming Languages', 'Prior Experience'],
  },
  {
    title: 'SystemVerilog',
    competency: 3,
    category: ['Programming Languages', 'Prior Experience'],
  },
  {
    title: 'Figma',
    competency: 2,
    category: ['Technologies'],
  },
  {
    title: 'CLion',
    competency: 3,
    category: ['Technologies'],
  },
  {
    title: 'PyCharm',
    competency: 3,
    category: ['Technologies'],
  },
  {
    title: 'VIM',
    competency: 4,
    category: ['Technologies'],
  },
  {
    title: 'Arduino',
    competency: 4,
    category: ['Technologies'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3', // Proficient Programming Languages
  '#37b1f5', // Prior Experience Programming Languages
  '#40494e', // Technologies
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
