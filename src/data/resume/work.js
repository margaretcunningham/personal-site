/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'IYKYKnow.ai',
    position: 'Technical Support / Junior Developer',
    url: 'iykyknow.ai',
    startDate: '2024-05',
    summary: 'As a Technical Support / Junior Developer at IYKYKnow.ai, I directly contribute to the growth and effectiveness of AI-driven operations in a dynamic, startup environment. My role is crucial in addressing complex technical issues and enhancing our software solutions.',
    highlights: [
      'Analyze business requirements and customize software solutions to meet client specifications.',
      'Participate in the management, troubleshooting, and support of AI software products.',
      'Collaborate with development teams to ensure system compatibility and integrate new technologies.',
      'Engage in continuous learning to stay ahead of emerging technologies, focusing on Python and JavaScript.',
      'Provide key technical support to clients, solving a variety of software issues within cloud environments.',
    ],
  },
  {
    name: 'Lowe’s',
    position: 'Sales Associate',
    url: 'https://www.lowes.com/',
    startDate: '2021-06',
    endDate: '2023-06',
    summary: 'As a Sales Associate at Lowe’s, I played a key role in enhancing customer satisfaction through direct support, maintaining inventory accuracy, and safely handling products with heavy equipment. My tenure also included personal development through the Lowe’s tuition reimbursement program.',
    highlights: [
      'Leveraged the Lowe’s tuition reimbursement program to support educational expenses.',
      'Utilized effective communication skills to assist customers with inquiries and needs.',
      'Conducted inventory adjustments to optimize stock levels.',
      'Operated various types of heavy equipment and replenished products.',
    ],
  },
];

export default work;
