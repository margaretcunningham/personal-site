import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/margaretcunningham/personal-site
 */
const data = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/margaretcunningham/personal-site/commits/main/',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
