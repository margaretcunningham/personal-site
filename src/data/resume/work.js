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
    name: 'Infineon Technologies',
    position: 'Verification Engineer',
    url: 'https://www.infineon.com/',
    startDate: '2024-02',
    summary: 'As a Verification Engineer at Infineon Technologies in Lexington, KY, I play a pivotal role in optimizing engineering workflows and enhancing system adaptability. My work focuses on improving tool efficiency, bridging technological gaps, and streamlining documentation to support over 50 engineers effectively.',
    highlights: [
      'Achieved an 80X pre-processing and 2.5X total throughput speed improvement, reducing workflow delays for 50+ engineers.',
      'Created a specialized tool to bridge legacy and modern systems, enabling engineers to adapt swiftly to changes in the IT environment, demonstrating versatility and a user-centered approach to problem-solving.',
      'Spearheaded a comprehensive revamp of tool documentation, consolidating fragmented, outdated content into an intuitive and searchable structure, reducing dependency on informal knowledge-sharing and enhancing accessibility for all users.',
    ],
  },
  {
    name: 'Infineon Technologies',
    position: 'Intern',
    url: 'https://www.infineon.com/',
    startDate: '2023-11',
    endDate: '2024-02',
    summary: 'As an intern at Infineon Technologies in Lexington, KY, I contributed to optimizing verification management tools and supported engineering teams by enhancing the efficiency of workflows and system functionality.',
    highlights: [
      'Optimized a verification management tool by reducing time complexity and minimizing nodes visited in a DFS algorithm, improving the tool\'s performance.',
      'Utilized Git, VS Code, and QA testing to modify codebases and ensured functionality after updates, contributing to the maintenance of reliable systems.',
      'Collaborated with experienced engineers in staff and sync-up meetings, refining ideas and developing solutions in a team-oriented environment.',
    ],
  },
  {
    name: 'University of Kentucky',
    position: 'Undergraduate Teaching Assistant',
    url: 'https://www.uky.edu/',
    startDate: '2021-08',
    endDate: '2022-12',
    summary: 'As an Undergraduate Teaching Assistant at the University of Kentucky in Lexington, KY, I supported students in their learning of MATLAB programming and Arduino integration, helping them develop practical skills and troubleshoot complex projects.',
    highlights: [
      'Assisted students with MATLAB programming and Arduino integration, helping them understand core concepts and apply them to hands-on projects.',
      'Guided project development by troubleshooting breadboard configurations, motor integration, and other technical challenges, fostering a collaborative learning environment.',
    ],
  },
  {
    name: 'University of Kentucky',
    position: 'Undergraduate Teaching Assistant',
    url: 'https://www.uky.edu/',
    startDate: '2021-08',
    endDate: '2022-12',
    summary: 'As an Undergraduate Teaching Assistant at the University of Kentucky in Lexington, KY, I supported students in their learning of MATLAB programming and Arduino integration, helping them develop practical skills and troubleshoot complex projects.',
    highlights: [
      'Assisted students with MATLAB programming and Arduino integration, helping them understand core concepts and apply them to hands-on projects.',
      'Guided project development by troubleshooting breadboard configurations, motor integration, and other technical challenges, fostering a collaborative learning environment.',
    ],
  },
  {
    name: 'Naval Research Enterprise Internship Program',
    position: 'Intern',
    url: 'https://www.nreip.asee.org/',
    startDate: '2022-06',
    endDate: '2022-08',
    summary: 'As an intern with the Naval Research Enterprise Internship Program in Washington, D.C., I worked closely with software engineering and AI teams to enhance autonomous systems through the application of formal methods and advanced testing techniques.',
    highlights: [
      'Coordinated with software engineering and AI teams, using formal methods to assure machine learning in autonomous systems.',
      'Implemented experiments to optimize model checking and test case generation, enhancing testing methods.',
    ],
  },
  {
    name: 'Naval Research Enterprise Internship Program',
    position: 'Intern',
    url: 'https://www.nreip.asee.org/',
    startDate: '2021-05',
    endDate: '2021-08',
    summary: 'As an intern with the Naval Research Enterprise Internship Program in Washington, D.C., I developed and implemented Data Acquisition (DAQ) technology to analyze time code signals from satellites, ensuring accurate monitoring of NTP signals.',
    highlights: [
      'Implemented Data Acquisition (DAQ) technology for reading and analyzing time code signals by converting amplitude modulated sine waves to digital signals acquired from satellites to monitor the accuracy of NTP signals in C.',
    ],
  },
];

export default work;
