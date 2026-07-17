/* ===================================================
   GridSpeak — i18n
   Languages: en, de, fr, es
   =================================================== */
const TRANSLATIONS = {
  en: {
    'nav.signin':'Sign In','nav.register':'Register','nav.getstarted':'Get Started',
    'hero.badge':'v1.21.11 — Latest Release','hero.h1a':'Play Minecraft','hero.h1b':'Together.',
    'hero.desc':'GridSpeak is a Fabric mod that gives your server everything it needs — teleportation, voice chat, party system, and custom avatars. Drop in one .jar, restart, done.',
    'hero.btn.start':'Get Started','hero.btn.install':'How to Install','hero.tag.noconfig':'No config',
    'stats.downloads':'Downloads','stats.versions':'Versions','stats.latest':'Latest MC','stats.always':'Always',
    'install.label':'Installation','install.title':'Up and running in 3 steps','install.sub':'No config files. No setup wizard. Just drop and play.',
    'install.s1.title':'Download the .jar','install.s1.desc':'Pick your Minecraft version on the mod page and grab the latest release.',
    'install.s2.title':'Drop into /mods','install.s2.desc':"Place the file in your Fabric server's /mods folder.",
    'install.s3.title':'Restart & Play','install.s3.desc':'Restart the server. GridSpeak loads automatically — all commands are live immediately.',
    'cta.tag':'v1.21.11 — Latest Release','cta.title':'Ready to play?','cta.desc':'Lightweight, free, and works on any Fabric server.','cta.btn':'Get Started',
    'modal.signin.title':'Welcome back','modal.signin.sub':'Sign in to your GridSpeak account',
    'modal.signin.label.user':'Username or Email','modal.signin.label.pass':'Password',
    'modal.signin.btn':'Sign In','modal.signin.foot':"Don't have an account?",'modal.signin.foot.link':'Register',
    'modal.reg.title':'Create account','modal.reg.sub':'Join the GridSpeak community',
    'modal.reg.label.user':'Username','modal.reg.label.email':'Email','modal.reg.label.pass':'Password',
    'modal.reg.btn':'Create Account','modal.reg.foot':'Already have an account?','modal.reg.foot.link':'Sign In',
    'mod.desc':'A lightweight Fabric mod for playing together — teleportation, party system, in-game voice chat, and a custom avatar identity system. Works on any server, no config required.',
    'mod.downloads':'Downloads','mod.follows':'Follows','mod.env':'Client & Server',
    'mod.tab.versions':'Versions','mod.tab.changelog':'Changelog','mod.tab.description':'Description',
    'mod.filter.gamevers':'Game versions','mod.filter.channels':'Channels',
    'mod.feat.play.title':'Play Together',
    'mod.feat.play.desc':'Every multiplayer essential in one mod. Teleport to friends, set personal homes, share warps across the server, create parties with private chat, and return to your last location after death. No setup required.',
    'mod.feat.voice.title':'In-Game Voice Chat',
    'mod.feat.voice.desc':'Built-in proximity voice — players within 24 blocks hear each other automatically in 3D space. No Discord needed. Use a private party channel, adjust per-player volume from the tab list, or mute everyone with a single keybind.',
    'mod.feat.avatar.title':'Custom Avatar System',
    'mod.feat.avatar.desc':'Give every player a real identity beyond their skin. Equip Unicode badges next to your name in chat, set a custom title above your head, pick a personal color theme, and see everyone on the scoreboard and tab list.',
    'mod.compat.title':'Compatibility','mod.compat.platform':'Platform','mod.compat.env':'Environment',
    'mod.compat.mcver':'MC Versions','mod.compat.fabricapi':'Fabric API','mod.compat.java':'Java','mod.compat.license':'License',
    'mod.sidebar.compat':'Compatibility','mod.sidebar.mcje':'Minecraft: Java Edition','mod.sidebar.platforms':'Platforms',
    'mod.sidebar.env2':'Environment','mod.sidebar.client':'Client-side','mod.sidebar.server':'Server-side','mod.sidebar.both':'Client & server',
    'mod.sidebar.projinfo':'Project info','mod.sidebar.dl':'Downloads','mod.sidebar.created':'Created','mod.sidebar.updated':'Updated','mod.sidebar.versions':'Versions',
    'footer.privacy':'Privacy Policy','footer.terms':'Terms of Use',
  },

  de: {
    'nav.signin':'Anmelden','nav.register':'Registrieren','nav.getstarted':'Loslegen',
    'hero.badge':'v1.21.11 — Neueste Version','hero.h1a':'Minecraft spielen','hero.h1b':'Zusammen.',
    'hero.desc':'GridSpeak ist ein Fabric-Mod, der deinem Server alles bietet — Teleportation, Sprachchat, Party-System und individuelle Avatare. Eine .jar rein, neu starten, fertig.',
    'hero.btn.start':'Loslegen','hero.btn.install':'Installation','hero.tag.noconfig':'Keine Konfiguration',
    'stats.downloads':'Downloads','stats.versions':'Versionen','stats.latest':'Neueste MC','stats.always':'Immer',
    'install.label':'Installation','install.title':'In 3 Schritten startklar','install.sub':'Keine Konfiguration. Einfach fallen lassen und spielen.',
    'install.s1.title':'.jar herunterladen','install.s1.desc':'Wähle deine Minecraft-Version und lade die neueste Version herunter.',
    'install.s2.title':'In /mods ablegen','install.s2.desc':'Lege die Datei in den /mods-Ordner deines Fabric-Servers.',
    'install.s3.title':'Neu starten & Spielen','install.s3.desc':'Starte den Server neu. GridSpeak lädt automatisch — alle Befehle sind sofort verfügbar.',
    'cta.tag':'v1.21.11 — Neueste Version','cta.title':'Bereit zu spielen?','cta.desc':'Leichtgewichtig, kostenlos und funktioniert auf jedem Fabric-Server.','cta.btn':'Loslegen',
    'modal.signin.title':'Willkommen zurück','modal.signin.sub':'Melde dich bei deinem GridSpeak-Konto an',
    'modal.signin.label.user':'Benutzername oder E-Mail','modal.signin.label.pass':'Passwort',
    'modal.signin.btn':'Anmelden','modal.signin.foot':'Noch kein Konto?','modal.signin.foot.link':'Registrieren',
    'modal.reg.title':'Konto erstellen','modal.reg.sub':'Tritt der GridSpeak-Community bei',
    'modal.reg.label.user':'Benutzername','modal.reg.label.email':'E-Mail','modal.reg.label.pass':'Passwort',
    'modal.reg.btn':'Konto erstellen','modal.reg.foot':'Bereits ein Konto?','modal.reg.foot.link':'Anmelden',
    'mod.desc':'Ein leichtgewichtiger Fabric-Mod zum gemeinsamen Spielen — Teleportation, Sprachchat, Party-System und individuelle Avatare.',
    'mod.downloads':'Downloads','mod.follows':'Follower','mod.env':'Client & Server',
    'mod.tab.versions':'Versionen','mod.tab.changelog':'Änderungsprotokoll','mod.tab.description':'Beschreibung',
    'mod.filter.gamevers':'Spielversionen','mod.filter.channels':'Kanäle',
    'mod.feat.play.title':'Zusammen spielen',
    'mod.feat.play.desc':'Alles Wichtige für Multiplayer in einem Mod. Teleportiere zu Freunden, setze persönliche Häuser, teile Warps und kehre nach dem Tod zurück.',
    'mod.feat.voice.title':'In-Game-Sprachchat',
    'mod.feat.voice.desc':'Integrierter Näherungs-Sprachchat — kein Discord nötig. Spieler in 24 Blöcken Nähe hören sich automatisch im 3D-Raum.',
    'mod.feat.avatar.title':'Individuelle Avatare',
    'mod.feat.avatar.desc':'Gib jedem Spieler eine echte Identität jenseits seines Skins — im Chat, in der Tab-Liste und auf Scoreboards sichtbar.',
    'mod.compat.title':'Kompatibilität','mod.compat.platform':'Plattform','mod.compat.env':'Umgebung',
    'mod.compat.mcver':'MC-Versionen','mod.compat.fabricapi':'Fabric API','mod.compat.java':'Java','mod.compat.license':'Lizenz',
    'mod.sidebar.compat':'Kompatibilität','mod.sidebar.mcje':'Minecraft: Java Edition','mod.sidebar.platforms':'Plattformen',
    'mod.sidebar.env2':'Umgebung','mod.sidebar.client':'Client-seitig','mod.sidebar.server':'Server-seitig','mod.sidebar.both':'Client & Server',
    'mod.sidebar.projinfo':'Projektinfo','mod.sidebar.dl':'Downloads','mod.sidebar.created':'Erstellt','mod.sidebar.updated':'Aktualisiert','mod.sidebar.versions':'Versionen',
    'footer.privacy':'Datenschutz','footer.terms':'Nutzungsbedingungen',
  },

  fr: {
    'nav.signin':'Connexion','nav.register':"S'inscrire",'nav.getstarted':'Commencer',
    'hero.badge':'v1.21.11 — Derniere version','hero.h1a':'Jouez a Minecraft','hero.h1b':'Ensemble.',
    'hero.desc':'GridSpeak est un mod Fabric qui donne a votre serveur tout ce dont il a besoin — teleportation, chat vocal, systeme de groupe et avatars. Deposez un .jar, redemarrez, c\'est pret.',
    'hero.btn.start':'Commencer','hero.btn.install':'Installation','hero.tag.noconfig':'Sans configuration',
    'stats.downloads':'Telechargements','stats.versions':'Versions','stats.latest':'MC Recente','stats.always':'Toujours',
    'install.label':'Installation','install.title':'Pret en 3 etapes','install.sub':'Pas de configuration. Deposez et jouez.',
    'install.s1.title':'Telecharger le .jar','install.s1.desc':'Choisissez votre version Minecraft et telechargez la derniere version.',
    'install.s2.title':'Deposer dans /mods','install.s2.desc':'Placez le fichier dans le dossier /mods de votre serveur Fabric.',
    'install.s3.title':'Redemarrer et jouer','install.s3.desc':'Redemarrez le serveur. GridSpeak se charge automatiquement.',
    'cta.tag':'v1.21.11 — Derniere version','cta.title':'Pret a jouer ?','cta.desc':'Leger, gratuit et fonctionne sur tout serveur Fabric.','cta.btn':'Commencer',
    'modal.signin.title':'Bon retour','modal.signin.sub':'Connectez-vous a votre compte GridSpeak',
    'modal.signin.label.user':"Nom d'utilisateur ou e-mail",'modal.signin.label.pass':'Mot de passe',
    'modal.signin.btn':'Connexion','modal.signin.foot':'Pas encore de compte ?','modal.signin.foot.link':"S'inscrire",
    'modal.reg.title':'Creer un compte','modal.reg.sub':'Rejoignez la communaute GridSpeak',
    'modal.reg.label.user':"Nom d'utilisateur",'modal.reg.label.email':'E-mail','modal.reg.label.pass':'Mot de passe',
    'modal.reg.btn':'Creer un compte','modal.reg.foot':'Deja un compte ?','modal.reg.foot.link':'Connexion',
    'mod.desc':'Un mod Fabric leger pour jouer ensemble — teleportation, chat vocal, systeme de groupe et avatars personnalises.',
    'mod.downloads':'Telechargements','mod.follows':'Abonnes','mod.env':'Client & Serveur',
    'mod.tab.versions':'Versions','mod.tab.changelog':'Journal des modifications','mod.tab.description':'Description',
    'mod.filter.gamevers':'Versions du jeu','mod.filter.channels':'Canaux',
    'mod.feat.play.title':'Jouer ensemble',
    'mod.feat.play.desc':'Tous les essentiels multijoueurs en un seul mod. Teleportez-vous vers vos amis, definissez des maisons, partagez des warps et revenez apres la mort.',
    'mod.feat.voice.title':'Chat vocal integre',
    'mod.feat.voice.desc':'Chat vocal de proximite integre — pas besoin de Discord. Les joueurs a moins de 24 blocs s\'entendent automatiquement en 3D.',
    'mod.feat.avatar.title':"Systeme d'avatar",
    'mod.feat.avatar.desc':"Donnez a chaque joueur une vraie identite — visible dans le chat, la liste des joueurs et les tableaux de bord.",
    'mod.compat.title':'Compatibilite','mod.compat.platform':'Plateforme','mod.compat.env':'Environnement',
    'mod.compat.mcver':'Versions MC','mod.compat.fabricapi':'API Fabric','mod.compat.java':'Java','mod.compat.license':'Licence',
    'mod.sidebar.compat':'Compatibilite','mod.sidebar.mcje':'Minecraft: Java Edition','mod.sidebar.platforms':'Plateformes',
    'mod.sidebar.env2':'Environnement','mod.sidebar.client':'Cote client','mod.sidebar.server':'Cote serveur','mod.sidebar.both':'Client & Serveur',
    'mod.sidebar.projinfo':'Infos du projet','mod.sidebar.dl':'Telechargements','mod.sidebar.created':'Cree','mod.sidebar.updated':'Mis a jour','mod.sidebar.versions':'Versions',
    'footer.privacy':'Confidentialite','footer.terms':"Conditions d'utilisation",
  },

  es: {
    'nav.signin':'Iniciar sesion','nav.register':'Registrarse','nav.getstarted':'Empezar',
    'hero.badge':'v1.21.11 — Ultima version','hero.h1a':'Juega Minecraft','hero.h1b':'Juntos.',
    'hero.desc':'GridSpeak es un mod de Fabric que le da a tu servidor todo lo que necesita — teletransportacion, chat de voz, sistema de grupos y avatares. Pon un .jar, reinicia, listo.',
    'hero.btn.start':'Empezar','hero.btn.install':'Instalacion','hero.tag.noconfig':'Sin configuracion',
    'stats.downloads':'Descargas','stats.versions':'Versiones','stats.latest':'MC reciente','stats.always':'Siempre',
    'install.label':'Instalacion','install.title':'Listo en 3 pasos','install.sub':'Sin archivos de configuracion. Solo suelta y juega.',
    'install.s1.title':'Descargar el .jar','install.s1.desc':'Elige tu version de Minecraft y descarga la ultima version.',
    'install.s2.title':'Colocar en /mods','install.s2.desc':'Coloca el archivo en la carpeta /mods de tu servidor Fabric.',
    'install.s3.title':'Reiniciar y jugar','install.s3.desc':'Reinicia el servidor. GridSpeak se carga automaticamente.',
    'cta.tag':'v1.21.11 — Ultima version','cta.title':'Listo para jugar?','cta.desc':'Ligero, gratuito y funciona en cualquier servidor Fabric.','cta.btn':'Empezar',
    'modal.signin.title':'Bienvenido de nuevo','modal.signin.sub':'Inicia sesion en tu cuenta de GridSpeak',
    'modal.signin.label.user':'Usuario o correo','modal.signin.label.pass':'Contrasena',
    'modal.signin.btn':'Iniciar sesion','modal.signin.foot':'No tienes cuenta?','modal.signin.foot.link':'Registrarse',
    'modal.reg.title':'Crear cuenta','modal.reg.sub':'Unete a la comunidad de GridSpeak',
    'modal.reg.label.user':'Usuario','modal.reg.label.email':'Correo electronico','modal.reg.label.pass':'Contrasena',
    'modal.reg.btn':'Crear cuenta','modal.reg.foot':'Ya tienes cuenta?','modal.reg.foot.link':'Iniciar sesion',
    'mod.desc':'Un mod ligero de Fabric para jugar juntos — teletransportacion, chat de voz, sistema de grupos y avatares personalizados.',
    'mod.downloads':'Descargas','mod.follows':'Seguidores','mod.env':'Cliente y Servidor',
    'mod.tab.versions':'Versiones','mod.tab.changelog':'Registro de cambios','mod.tab.description':'Descripcion',
    'mod.filter.gamevers':'Versiones del juego','mod.filter.channels':'Canales',
    'mod.feat.play.title':'Jugar juntos',
    'mod.feat.play.desc':'Todo lo esencial para multijugador en un solo mod. Teleporta a tus amigos, establece casas, comparte warps y regresa despues de morir.',
    'mod.feat.voice.title':'Chat de voz en el juego',
    'mod.feat.voice.desc':'Chat de voz por proximidad integrado — sin Discord. Los jugadores a menos de 24 bloques se escuchan automaticamente en 3D.',
    'mod.feat.avatar.title':'Sistema de avatar',
    'mod.feat.avatar.desc':'Dale a cada jugador una identidad real mas alla de su skin — visible en el chat, la lista de jugadores y los marcadores.',
    'mod.compat.title':'Compatibilidad','mod.compat.platform':'Plataforma','mod.compat.env':'Entorno',
    'mod.compat.mcver':'Versiones MC','mod.compat.fabricapi':'API de Fabric','mod.compat.java':'Java','mod.compat.license':'Licencia',
    'mod.sidebar.compat':'Compatibilidad','mod.sidebar.mcje':'Minecraft: Java Edition','mod.sidebar.platforms':'Plataformas',
    'mod.sidebar.env2':'Entorno','mod.sidebar.client':'Solo cliente','mod.sidebar.server':'Solo servidor','mod.sidebar.both':'Cliente y Servidor',
    'mod.sidebar.projinfo':'Info del proyecto','mod.sidebar.dl':'Descargas','mod.sidebar.created':'Creado','mod.sidebar.updated':'Actualizado','mod.sidebar.versions':'Versiones',
    'footer.privacy':'Privacidad','footer.terms':'Terminos de uso',
  }
};

const LANG_META = {
  en: { flag: 'https://flagcdn.com/w40/gb.png', label: 'English',  code: 'EN' },
  de: { flag: 'https://flagcdn.com/w40/de.png', label: 'Deutsch',  code: 'DE' },
  fr: { flag: 'https://flagcdn.com/w40/fr.png', label: 'Français', code: 'FR' },
  es: { flag: 'https://flagcdn.com/w40/es.png', label: 'Español',  code: 'ES' },
};

function makeFlagImg(url, code) {
  return `<img src="${url}" alt="${code}" width="20" height="14" style="border-radius:2px;object-fit:cover;border:1px solid rgba(255,255,255,0.15);flex-shrink:0;vertical-align:middle;">`;
}

function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] === undefined) return;
    if (el.tagName === 'INPUT') el.placeholder = t[key];
    else el.textContent = t[key];
  });
  localStorage.setItem('emc-lang', lang);
  const m = LANG_META[lang];
  const btn = document.getElementById('langPickerBtn');
  if (btn && m) {
    btn.innerHTML = makeFlagImg(m.flag, m.code) +
      `<span class="lang-code">${m.code}</span>` +
      `<svg class="dd-arrow" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`;
  }
  document.documentElement.lang = lang;
}

function initLangPicker() {
  const btn = document.getElementById('langPickerBtn');
  const dd  = document.getElementById('langPickerDd');
  if (!btn || !dd) return;

  dd.innerHTML = Object.entries(LANG_META).map(([code, meta]) =>
    `<div class="dd-item lang-item" data-lang="${code}" style="display:flex;align-items:center;gap:8px;">
       ${makeFlagImg(meta.flag, meta.code)}
       <span class="lang-code">${meta.code}</span>
       <span class="lang-label" style="font-size:0.82rem;color:var(--text-mid);">${meta.label}</span>
     </div>`
  ).join('');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = dd.classList.contains('open');
    document.querySelectorAll('.dd-panel.open').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.filter-btn.dd-open').forEach(b => b.classList.remove('dd-open'));
    if (!isOpen) { dd.classList.add('open'); btn.classList.add('dd-open'); }
  });

  document.addEventListener('click', () => {
    dd.classList.remove('open');
    btn.classList.remove('dd-open');
  });

  dd.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', () => {
      applyLang(item.dataset.lang);
      dd.classList.remove('open');
      btn.classList.remove('dd-open');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('emc-lang') || 'en';
  applyLang(saved);
  initLangPicker();
});
