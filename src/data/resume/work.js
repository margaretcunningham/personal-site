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
    name: 'Lowe’s',
    position: 'Sales Associate',
    url: 'https://www.lowes.com/',
    startDate: '2021-06',
    endDate: '2023-06',
    summary: 'Utilized effective communication skills to assist customers with inquiries and needs, conducted inventory adjustments to optimize stock levels, and operated various types of heavy equipment to replenish products. Leveraged the Lowes tuition reimbursement program to support educational expenses.',
    highlights: [
      'Leveraged the Lowe’s tuition reimbursement program to support educational expenses.',
      'Utilized effective communication skills to assist customers with inquiries and needs.',
      'Conducted inventory adjustments to optimize stock levels.',
      'Operated various types of heavy equipment and replenished products.',
    ],
  },
];

export default work;
