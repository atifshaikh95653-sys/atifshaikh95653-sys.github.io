import { FaAws } from 'react-icons/fa';
import {
  SiAndroid,
  SiCapacitor,
  SiCss,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJira,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRedis,
  SiSqlite,
  SiSass,
  SiSwift,
  SiVuedotjs,
} from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { Code2, Database, Monitor, Server, Smartphone, Wrench, WrenchIcon } from 'lucide-react';

const DEFAULT_ICON = Code2;

/** Maps skill names from portfolio.js to icon components and brand colors */
const SKILL_MAP = {
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  C: { Icon: Code2, color: '#00599C' },
  'C++': { Icon: SiCplusplus, color: '#00599C' },
  SQL: { Icon: SiSqlite, color: '#336791' },
  'Node.js': { Icon: SiNodedotjs, color: '#339933' },
  'Responsive Design': { Icon: Code2, color: '#ef4444' },
  'VS Code': { Icon: Code2, color: '#007ACC' },
  'MS Word': { Icon: Code2, color: '#2B579A' },
  'Google Docs': { Icon: Code2, color: '#4285F4' },
  GitHub: { Icon: SiGithub, color: '#ffffff' },
  'C': { Icon: Code2, color: '#00599C' },
  'C++': { Icon: SiCplusplus, color: '#00599C' },
  'VS Code': { Icon: Code2, color: '#007ACC' },
  'MS Word': { Icon: Code2, color: '#2B579A' },
  'Google Docs': { Icon: Code2, color: '#4285F4' },
  'Responsive Design': { Icon: Code2, color: '#ef4444' },
  Swift: { Icon: SiSwift, color: '#F05138' },
  Go: { Icon: SiGo, color: '#00ADD8' },
  Python: { Icon: SiPython, color: '#3776AB' },
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  React: { Icon: SiReact, color: '#61DAFB' },
  'Next.js': { Icon: SiNextdotjs, color: '#ffffff' },
  Redux: { Icon: SiRedux, color: '#764ABC' },
  'Vue.js': { Icon: SiVuedotjs, color: '#4FC08D' },
  Django: { Icon: SiDjango, color: '#092E20' },
  HTML5: { Icon: SiHtml5, color: '#E34F26' },
  CSS3: { Icon: SiCss, color: '#1572B6' },
  SCSS: { Icon: SiSass, color: '#CC6699' },
  'Android Development': { Icon: SiAndroid, color: '#3DDC84' },
  'React Native': { Icon: SiReact, color: '#61DAFB' },
  'React Native (Redux)': { Icon: SiReact, color: '#61DAFB' },
  'Capacitor.js': { Icon: SiCapacitor, color: '#119EFF' },
  SwiftUI: { Icon: SiSwift, color: '#F05138' },
  'Express.js': { Icon: SiExpress, color: '#ffffff' },
  Gin: { Icon: SiGo, color: '#00ADD8' },
  FastAPI: { Icon: SiFastapi, color: '#009688' },
  Flask: { Icon: SiFlask, color: '#ffffff' },
  'CI/CD': { Icon: Wrench, color: '#ef4444' },
  AWS: { Icon: FaAws, color: '#FF9900' },
  Git: { Icon: SiGit, color: '#F05032' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  Jira: { Icon: SiJira, color: '#0052CC' },
  Artifactory: { Icon: Server, color: '#40BE46' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  MySQL: { Icon: SiMysql, color: '#4479A1' },
  Redis: { Icon: SiRedis, color: '#DC382D' },
  PHP: { Icon: SiPhp, color: '#777BB4' },
  'Highcharts.js': { Icon: Code2, color: '#ef4444' },
  'Chart.js': { Icon: Code2, color: '#FF6384' },
  Firebase: { Icon: Database, color: '#FFCA28' },
  JWT: { Icon: Code2, color: '#ef4444' },
  'Push Notifications': { Icon: Smartphone, color: '#ef4444' },
  'Excel Export': { Icon: Code2, color: '#217346' },
  'Streaming API': { Icon: Server, color: '#ef4444' },
  'Payments API': { Icon: Server, color: '#22c55e' },
  'E-commerce': { Icon: Code2, color: '#ef4444' },
  Charts: { Icon: Code2, color: '#ef4444' },
  Dashboard: { Icon: Code2, color: '#3b82f6' },
  Android: { Icon: SiAndroid, color: '#3DDC84' },
  iOS: { Icon: SiSwift, color: '#F05138' },
  Razorpay: { Icon: Code2, color: '#0C2451' },
  GitHub: { Icon: SiGit, color: '#ffffff' },
  Various: { Icon: Code2, color: '#94a3b8' },
};

function normalizeSkillName(name) {
  return name
    .replace(/\s*\(Redux\)\s*/gi, '')
    .replace(/\s*\(Redux\)/gi, '')
    .trim();
}

export function getSkillIcon(skillName, iconType) {
  if (iconType === 'monitor') return Monitor;
  if (iconType === 'database') return Database;
  if (iconType === 'tool') return WrenchIcon;

  const direct = SKILL_MAP[skillName];
  if (direct) return direct.Icon;

  const normalized = normalizeSkillName(skillName);
  if (SKILL_MAP[normalized]) return SKILL_MAP[normalized].Icon;

  const lower = skillName.toLowerCase();
  if (lower.includes('react')) return SiReact;
  if (lower.includes('node')) return SiNodedotjs;
  if (lower.includes('vue')) return SiVuedotjs;
  if (lower.includes('python') || lower.includes('fastapi') || lower.includes('flask'))
    return SiPython;
  if (lower.includes('c++') || lower.includes('cplusplus')) return SiCplusplus;
  if (lower.includes('sql')) return SiSqlite;
  if (lower.includes('mysql')) return SiMysql;
  if (lower.includes('postgres')) return SiPostgresql;
  if (lower.includes('mongo')) return SiMongodb;
  if (lower.includes('docker')) return SiDocker;
  if (lower.includes('github')) return SiGithub;
  if (lower.includes('visual studio') || lower.includes('vscode') || lower.includes('code')) return Code2;
  if (lower.includes('word')) return Code2;
  if (lower.includes('docs')) return Code2;
  if (lower.includes('html')) return SiHtml5;
  if (lower.includes('css')) return SiCss;
  if (lower.includes('javascript')) return SiJavascript;
  if (lower.includes('swift')) return SiSwift;
  if (lower.includes('android')) return SiAndroid;
  if (lower.includes('css')) return SiCss;
  if (lower.includes('go ') || lower === 'go' || lower.includes('gin')) return SiGo;
  if (lower.includes('docker')) return SiDocker;
  if (lower.includes('aws')) return FaAws;
  if (lower.includes('mongo')) return SiMongodb;
  if (lower.includes('postgres')) return SiPostgresql;
  if (lower.includes('mysql')) return SiMysql;
  if (lower.includes('redis')) return SiRedis;
  if (lower.includes('next')) return SiNextdotjs;
  if (lower.includes('android')) return SiAndroid;
  if (lower.includes('swift')) return SiSwift;
  if (lower.includes('html')) return SiHtml5;
  if (lower.includes('scss')) return SiSass;
  if (lower.includes('css')) return SiCss;
  if (lower.includes('git')) return SiGit;
  if (lower.includes('express')) return SiExpress;
  if (lower.includes('django')) return SiDjango;
  if (lower.includes('capacitor')) return SiCapacitor;

  return DEFAULT_ICON;
}

export function getSkillColor(skillName, iconType) {
  if (iconType === 'monitor') return '#60a5fa';
  if (iconType === 'database') return '#34d399';
  if (iconType === 'tool') return '#f59e0b';

  const direct = SKILL_MAP[skillName];
  if (direct) return direct.color;

  const normalized = normalizeSkillName(skillName);
  if (SKILL_MAP[normalized]) return SKILL_MAP[normalized].color;

  return '#ef4444';
}
