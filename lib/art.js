/* Story pictures, drawn for this app (no outside images). Every picture uses a 240×200 canvas,
   the same moon/sun, wave and shading style, and no faces of Bible characters. */

const svg = (label, body) =>
  `<svg viewBox="0 0 240 200" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

const waves = (id) =>
  `<path d="M0 172 Q20 158 40 172 T80 172 T120 172 T160 172 T200 172 T240 172 V200 H0 Z" fill="url(#${id})"/>` +
  `<path d="M0 184 Q20 174 40 184 T80 184 T120 184 T160 184 T200 184 T240 184 V200 H0 Z" fill="#167C93"/>`;

const waveGrad = (id) =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4FD6C0"/><stop offset="1" stop-color="#1F8FA6"/></linearGradient>`;

const sunGrad = (id) =>
  `<radialGradient id="${id}" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#FFE59A"/><stop offset="1" stop-color="#F6B93B"/></radialGradient>`;

const hillGrad = (id) =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FD98A"/><stop offset="1" stop-color="#2F9E6B"/></linearGradient>`;

export const ART = {
  noah: svg("Noah's ark on the waves under a rainbow",
    `<defs>${waveGrad("nw")}
      <linearGradient id="nh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D98D47"/><stop offset="1" stop-color="#8A4B1F"/></linearGradient>
      <linearGradient id="nc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2B66A"/><stop offset="1" stop-color="#C8813D"/></linearGradient></defs>
    <g fill="none" stroke-width="7" stroke-linecap="round" opacity=".95">
      <path d="M28 120 A92 92 0 0 1 212 120" stroke="#FF7A6B"/><path d="M38 120 A82 82 0 0 1 202 120" stroke="#F6C343"/>
      <path d="M48 120 A72 72 0 0 1 192 120" stroke="#5EE1C5"/><path d="M58 120 A62 62 0 0 1 182 120" stroke="#6FB6FF"/></g>
    <rect x="86" y="92" width="70" height="40" rx="6" fill="url(#nc)"/>
    <path d="M78 94 L121 74 L164 94 Z" fill="#B5652B"/>
    <rect x="108" y="102" width="24" height="16" rx="4" fill="#5A2E12"/>
    <path d="M116 102 L114 66 M126 102 L128 70" stroke="#F6C343" stroke-width="7" stroke-linecap="round"/>
    <circle cx="114" cy="62" r="6" fill="#F6C343"/><circle cx="128" cy="66" r="6" fill="#F6C343"/>
    <circle cx="115" cy="82" r="1.8" fill="#B5652B"/><circle cx="127" cy="86" r="1.8" fill="#B5652B"/>
    <path d="M30 130 L210 130 Q200 168 160 170 L80 170 Q40 168 30 130 Z" fill="url(#nh)"/>
    <path d="M44 142 H196 M54 155 H186" stroke="#6B3815" stroke-width="2" opacity=".5"/>
    <path d="M30 130 L210 130 L206 138 L34 138 Z" fill="#F2B66A" opacity=".5"/>
    ${waves("nw")}`),

  david: svg("Young David with a sling facing a giant's huge helmet",
    `<defs>${hillGrad("dh")}
      <linearGradient id="dm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3D77A"/><stop offset=".6" stop-color="#C99A35"/><stop offset="1" stop-color="#8C6418"/></linearGradient>
      <radialGradient id="ds" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#C9CCDD"/></radialGradient></defs>
    <path d="M0 150 Q70 128 130 146 T240 140 V200 H0 Z" fill="url(#dh)"/>
    <path d="M0 172 Q80 156 150 170 T240 166 V200 H0 Z" fill="#2F9E6B"/>
    <path d="M138 40 Q190 20 222 56 Q240 82 232 126 L148 126 Q128 84 138 40 Z" fill="url(#dm)"/>
    <path d="M150 92 L232 92 L232 104 L150 104 Z" fill="#7A5512" opacity=".55"/>
    <path d="M176 104 L190 104 L190 126 L176 126 Z" fill="#7A5512" opacity=".55"/>
    <path d="M170 36 Q186 6 214 14 Q196 18 186 40 Z" fill="#E2503F"/>
    <path d="M150 52 Q168 38 190 40" stroke="#FFF2C4" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M128 30 L120 150" stroke="#8C6418" stroke-width="4" stroke-linecap="round"/>
    <path d="M128 30 L122 14 L134 16 Z" fill="#C9CCDD"/>
    <circle cx="52" cy="112" r="10" fill="#B9774B"/>
    <path d="M40 124 Q52 118 64 124 L68 156 L36 156 Z" fill="#E2503F"/>
    <path d="M36 156 L68 156 L66 162 L38 162 Z" fill="#B5352A"/>
    <path d="M42 162 L42 174 M60 162 L60 174" stroke="#B9774B" stroke-width="5" stroke-linecap="round"/>
    <path d="M62 128 Q86 104 92 78" stroke="#7A4B2A" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="96" cy="72" r="7" fill="url(#ds)"/>
    <path d="M104 64 Q114 56 124 56 M104 74 Q116 72 126 74" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>`),

  jonah: svg("A big blue fish leaping over the waves under a yellow moon",
    `<defs>${sunGrad("jm")}${waveGrad("jw")}
      <linearGradient id="jb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FB6FF"/><stop offset=".55" stop-color="#3D73E6"/><stop offset="1" stop-color="#2A3FB8"/></linearGradient>
      <linearGradient id="je" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9F3FF"/><stop offset="1" stop-color="#B9D5FF"/></linearGradient></defs>
    <circle cx="190" cy="42" r="26" fill="url(#jm)"/><circle cx="182" cy="36" r="5" fill="#F0B13A" opacity=".5"/>
    <path d="M60 70 L64 52 L70 70" fill="none" stroke="#9FD8FF" stroke-width="4" stroke-linecap="round"/>
    <path d="M50 74 Q46 58 54 50" fill="none" stroke="#9FD8FF" stroke-width="4" stroke-linecap="round"/>
    <path d="M74 74 Q80 60 74 50" fill="none" stroke="#9FD8FF" stroke-width="4" stroke-linecap="round"/>
    <path d="M20 120 Q40 70 110 72 Q170 74 190 112 L224 86 Q226 120 214 128 Q228 140 224 168 L190 140 Q160 170 100 166 Q40 162 20 120 Z" fill="url(#jb)"/>
    <path d="M40 132 Q80 160 130 156 Q168 152 186 138 Q150 150 110 146 Q66 142 40 132 Z" fill="url(#je)"/>
    <path d="M60 92 Q100 76 150 88 Q118 84 84 96 Z" fill="#9CCBFF" opacity=".7"/>
    <path d="M104 132 Q120 150 142 140 Q126 128 104 132 Z" fill="#2A3FB8"/>
    <circle cx="62" cy="108" r="10" fill="#fff"/><circle cx="64" cy="109" r="5" fill="#1E2275"/><circle cx="66" cy="106" r="1.8" fill="#fff"/>
    <path d="M36 128 Q46 136 58 132" fill="none" stroke="#1E2275" stroke-width="3" stroke-linecap="round"/>
    ${waves("jw")}
    <circle cx="210" cy="150" r="4" fill="#BDEBFF" opacity=".8"/><circle cx="222" cy="138" r="2.5" fill="#BDEBFF" opacity=".8"/>`),

  daniel: svg("A gentle lion sleeping under a window of light",
    `<defs>${sunGrad("nm")}
      <linearGradient id="nl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD27A"/><stop offset="1" stop-color="#E8962E"/></linearGradient>
      <radialGradient id="nn" cx=".45" cy=".4" r=".6"><stop offset="0" stop-color="#E07A2E"/><stop offset="1" stop-color="#A84E17"/></radialGradient>
      <linearGradient id="nb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF4C8" stop-opacity=".9"/><stop offset="1" stop-color="#FFF4C8" stop-opacity="0"/></linearGradient></defs>
    <path d="M150 20 Q150 6 168 6 L192 6 Q210 6 210 20 L210 64 L150 64 Z" fill="#FFE59A"/>
    <path d="M180 6 V64 M150 34 H210" stroke="#E8962E" stroke-width="3"/>
    <path d="M150 64 L210 64 L176 186 L72 186 Z" fill="url(#nb)"/>
    <path d="M0 176 Q120 160 240 176 V200 H0 Z" fill="#6B4A9E" opacity=".35"/>
    <ellipse cx="128" cy="150" rx="78" ry="30" fill="url(#nl)"/>
    <path d="M196 150 Q226 142 222 118 Q216 132 206 136" fill="none" stroke="#E8962E" stroke-width="6" stroke-linecap="round"/>
    <circle cx="222" cy="114" r="7" fill="#A84E17"/>
    <circle cx="66" cy="130" r="40" fill="url(#nn)"/>
    <circle cx="70" cy="134" r="26" fill="url(#nl)"/>
    <path d="M56 130 Q61 134 66 130 M76 130 Q81 134 86 130" stroke="#7A3A10" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="71" cy="142" rx="6" ry="4" fill="#7A3A10"/>
    <path d="M71 146 Q66 152 62 150 M71 146 Q76 152 80 150" stroke="#7A3A10" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M100 172 Q110 180 124 176 M150 172 Q160 180 174 176" stroke="#E8962E" stroke-width="6" stroke-linecap="round" fill="none"/>
    <text x="104" y="96" font-family="Poppins,sans-serif" font-size="18" font-weight="700" fill="#FFFFFF" opacity=".85">z</text>
    <text x="118" y="80" font-family="Poppins,sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" opacity=".6">z</text>`),

  samaritan: svg("A kind traveller leading a donkey that carries a hurt man",
    `<defs>${sunGrad("sm")}${hillGrad("sh")}
      <linearGradient id="sd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B9BFD6"/><stop offset="1" stop-color="#7C84A6"/></linearGradient></defs>
    <circle cx="196" cy="40" r="22" fill="url(#sm)"/>
    <path d="M0 130 Q60 100 120 120 T240 112 V200 H0 Z" fill="url(#sh)"/>
    <path d="M150 116 Q120 140 150 156 Q190 176 110 200 L60 200 Q140 172 104 156 Q76 140 130 118 Z" fill="#F4D9A6"/>
    <ellipse cx="112" cy="140" rx="36" ry="18" fill="url(#sd)"/>
    <path d="M140 132 Q156 112 166 116 L170 136 Q158 140 146 146 Z" fill="url(#sd)"/>
    <path d="M160 116 L156 100 L164 112 M166 116 L170 100 L170 116" fill="#7C84A6" stroke="#7C84A6" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="166" cy="128" r="2" fill="#2B2F55"/>
    <path d="M86 152 V178 M100 154 V180 M124 154 V180 M138 152 V178" stroke="#7C84A6" stroke-width="6" stroke-linecap="round"/>
    <path d="M78 136 Q70 144 72 154" stroke="#7C84A6" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M88 124 Q112 112 136 124 L134 132 L90 132 Z" fill="#5EA8E8"/>
    <circle cx="140" cy="118" r="8" fill="#C98B5E"/>
    <path d="M134 114 Q140 108 146 114" stroke="#FFFFFF" stroke-width="3" fill="none"/>
    <circle cx="196" cy="128" r="9" fill="#9A6440"/>
    <path d="M184 140 Q196 134 208 140 L212 178 L180 178 Z" fill="#2FBF9F"/>
    <path d="M186 148 L170 136" stroke="#9A6440" stroke-width="4" stroke-linecap="round"/>
    <path d="M170 136 Q166 132 164 130" stroke="#6B4A2A" stroke-width="2" fill="none"/>`),

  sheep: svg("A shepherd's staff beside one little sheep on a green hill",
    `<defs>${sunGrad("pm")}${hillGrad("ph")}
      <radialGradient id="pw" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#DCE2F2"/></radialGradient></defs>
    <circle cx="56" cy="44" r="24" fill="url(#pm)"/>
    <path d="M0 128 Q90 90 240 120 V200 H0 Z" fill="url(#ph)"/>
    <path d="M0 160 Q120 136 240 158 V200 H0 Z" fill="#2F9E6B"/>
    <path d="M186 186 L186 60 Q186 34 166 34 Q148 34 148 52" stroke="#9A5B2E" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M100 148 V170 M114 150 V172 M134 150 V172 M148 148 V170" stroke="#3B3F66" stroke-width="6" stroke-linecap="round"/>
    <g fill="url(#pw)">
      <circle cx="104" cy="128" r="16"/><circle cx="124" cy="120" r="18"/><circle cx="146" cy="128" r="16"/>
      <circle cx="112" cy="142" r="16"/><circle cx="138" cy="142" r="16"/><circle cx="124" cy="136" r="18"/></g>
    <ellipse cx="88" cy="126" rx="13" ry="16" fill="#3B3F66"/>
    <path d="M78 116 Q70 112 68 120 M98 116 Q106 112 106 120" stroke="#3B3F66" stroke-width="6" stroke-linecap="round" fill="none"/>
    <circle cx="84" cy="124" r="2.4" fill="#FFFFFF"/><circle cx="93" cy="124" r="2.4" fill="#FFFFFF"/>
    <path d="M200 70 C200 62 210 60 212 68 C214 60 224 62 224 70 C224 80 212 86 212 90 C212 86 200 80 200 70 Z" fill="#FF7A6B"/>`),

  feeding: svg("A basket with five loaves and two fish in the sunshine",
    `<defs>${sunGrad("fs")}
      <linearGradient id="fk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D99A55"/><stop offset="1" stop-color="#8A5422"/></linearGradient>
      <linearGradient id="fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD98A"/><stop offset="1" stop-color="#D99230"/></linearGradient>
      <linearGradient id="ff" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FC8FF"/><stop offset="1" stop-color="#3D73E6"/></linearGradient></defs>
    <g stroke="#FFE59A" stroke-width="5" stroke-linecap="round" opacity=".7">
      <path d="M120 18 V2"/><path d="M78 30 L66 16"/><path d="M162 30 L174 16"/><path d="M52 62 L36 54"/><path d="M188 62 L204 54"/></g>
    <circle cx="120" cy="70" r="40" fill="url(#fs)"/>
    <ellipse cx="80" cy="104" rx="26" ry="15" fill="url(#fl)"/><ellipse cx="120" cy="96" rx="26" ry="15" fill="url(#fl)"/>
    <ellipse cx="160" cy="104" rx="26" ry="15" fill="url(#fl)"/><ellipse cx="100" cy="116" rx="26" ry="15" fill="url(#fl)"/>
    <ellipse cx="140" cy="116" rx="26" ry="15" fill="url(#fl)"/>
    <g stroke="#B5701F" stroke-width="2.5" stroke-linecap="round" opacity=".6">
      <path d="M72 100 L78 108 M82 98 L88 106"/><path d="M112 92 L118 100 M122 90 L128 98"/><path d="M152 100 L158 108 M162 98 L168 106"/></g>
    <path d="M34 96 Q56 82 76 96 L88 86 L86 106 L76 98 Q56 112 34 96 Z" fill="url(#ff)"/>
    <circle cx="46" cy="94" r="2.5" fill="#1E2275"/>
    <path d="M206 96 Q184 82 164 96 L152 86 L154 106 L164 98 Q184 112 206 96 Z" fill="url(#ff)"/>
    <circle cx="194" cy="94" r="2.5" fill="#1E2275"/>
    <path d="M30 120 L210 120 L190 186 Q120 196 50 186 Z" fill="url(#fk)"/>
    <path d="M38 140 H202 M44 160 H196" stroke="#6B3E14" stroke-width="3" opacity=".45"/>
    <path d="M70 120 L66 188 M100 120 L98 192 M140 120 L142 192 M170 120 L174 188" stroke="#6B3E14" stroke-width="3" opacity=".3"/>
    <path d="M24 116 H216 Q220 116 218 124 H22 Q20 116 24 116 Z" fill="#B87437"/>`),

  zacchaeus: svg("A small man sitting up in a big leafy tree above a crowd",
    `<defs>${sunGrad("zs")}
      <radialGradient id="zl" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#8BE38F"/><stop offset="1" stop-color="#2F9E6B"/></radialGradient>
      <linearGradient id="zt" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#A86A3A"/><stop offset="1" stop-color="#6B3E1C"/></linearGradient></defs>
    <circle cx="206" cy="36" r="20" fill="url(#zs)"/>
    <path d="M108 200 Q116 150 106 112 L130 112 Q122 150 134 200 Z" fill="url(#zt)"/>
    <path d="M114 128 Q90 116 72 100 M124 124 Q150 110 166 92" stroke="#7A4A22" stroke-width="7" stroke-linecap="round" fill="none"/>
    <g fill="url(#zl)">
      <circle cx="70" cy="86" r="30"/><circle cx="118" cy="62" r="40"/><circle cx="168" cy="82" r="32"/>
      <circle cx="96" cy="100" r="26"/><circle cx="146" cy="104" r="26"/></g>
    <circle cx="92" cy="60" r="6" fill="#FFFFFF" opacity=".25"/><circle cx="140" cy="44" r="8" fill="#FFFFFF" opacity=".25"/>
    <circle cx="158" cy="84" r="8" fill="#C98B5E"/>
    <path d="M150 94 Q158 90 166 94 L168 112 L148 112 Z" fill="#5E6BE8"/>
    <path d="M150 98 L140 92 M166 98 L174 90" stroke="#C98B5E" stroke-width="4" stroke-linecap="round"/>
    <g fill="#3B3F66" opacity=".85">
      <circle cx="30" cy="172" r="9"/><path d="M18 200 Q30 180 42 200 Z"/>
      <circle cx="58" cy="176" r="9"/><path d="M46 200 Q58 184 70 200 Z"/>
      <circle cx="184" cy="174" r="9"/><path d="M172 200 Q184 182 196 200 Z"/>
      <circle cx="212" cy="178" r="9"/><path d="M200 200 Q212 186 224 200 Z"/></g>`),

  book: svg("An open Bible with light shining from it",
    `<defs>${sunGrad("bs")}
      <linearGradient id="bp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#DCE2F2"/></linearGradient></defs>
    <circle cx="120" cy="70" r="46" fill="url(#bs)" opacity=".9"/>
    <path d="M30 120 Q76 100 120 124 Q164 100 210 120 L210 176 Q164 158 120 180 Q76 158 30 176 Z" fill="#2A2F9E"/>
    <path d="M38 114 Q78 96 118 118 L118 170 Q78 150 38 168 Z" fill="url(#bp)"/>
    <path d="M202 114 Q162 96 122 118 L122 170 Q162 150 202 168 Z" fill="url(#bp)"/>
    <path d="M52 124 Q78 114 104 126 M52 138 Q78 128 104 140 M136 126 Q162 114 188 124 M136 140 Q162 128 188 138" stroke="#B9BFE6" stroke-width="3" fill="none" stroke-linecap="round"/>`),
};

// which testament each ready-made story belongs to
export const TESTAMENT = { noah: "ot", david: "ot", jonah: "ot", daniel: "ot", samaritan: "nt", sheep: "nt", feeding: "nt", zacchaeus: "nt" };

/* Game pictures: one per kind of activity, so two games from the same story never look alike.
   Each sits on a 160×110 canvas; the tile behind it gets its colour from GAME_KIND_BG. */
const g = (label, body) =>
  `<svg viewBox="0 0 160 110" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

export const GAME_ART = {
  pairs: g("Two sets of footprints walking side by side",
    `<g fill="#7C3AED"><ellipse cx="52" cy="78" rx="9" ry="13"/><circle cx="45" cy="60" r="3.5"/><circle cx="52" cy="57" r="3.5"/><circle cx="59" cy="60" r="3.5"/>
      <ellipse cx="72" cy="48" rx="9" ry="13"/><circle cx="65" cy="30" r="3.5"/><circle cx="72" cy="27" r="3.5"/><circle cx="79" cy="30" r="3.5"/></g>
     <g fill="#EC4899"><ellipse cx="96" cy="82" rx="9" ry="13"/><circle cx="89" cy="64" r="3.5"/><circle cx="96" cy="61" r="3.5"/><circle cx="103" cy="64" r="3.5"/>
      <ellipse cx="116" cy="52" rx="9" ry="13"/><circle cx="109" cy="34" r="3.5"/><circle cx="116" cy="31" r="3.5"/><circle cx="123" cy="34" r="3.5"/></g>
     <path d="M84 18 C84 13 90 12 91 17 C92 12 98 13 98 18 C98 24 91 27 91 30 C91 27 84 24 84 18 Z" fill="#F43F5E"/>`),

  actions: g("A child jumping with arms up among stars",
    `<circle cx="80" cy="30" r="10" fill="#F59E0B"/>
     <path d="M80 42 L80 70 M80 50 L62 34 M80 50 L98 34 M80 70 L68 90 M80 70 L92 90" stroke="#7C3AED" stroke-width="8" stroke-linecap="round" fill="none"/>
     <g fill="#FBBF24"><path d="M34 30 l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z"/><path d="M126 52 l3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z"/></g>
     <circle cx="124" cy="22" r="4" fill="#EC4899"/><circle cx="38" cy="72" r="3" fill="#EC4899"/>`),

  search: g("A magnifying glass finding one bright stone among others",
    `<g fill="#A8A29E"><ellipse cx="40" cy="84" rx="14" ry="8"/><ellipse cx="70" cy="90" rx="12" ry="7"/><ellipse cx="124" cy="86" rx="13" ry="8"/></g>
     <ellipse cx="98" cy="80" rx="14" ry="9" fill="#FDE68A"/><ellipse cx="94" cy="77" rx="5" ry="2.5" fill="#FFFFFF" opacity=".8"/>
     <circle cx="92" cy="48" r="24" fill="#E0F2FE" opacity=".7" stroke="#7C3AED" stroke-width="7"/>
     <path d="M74 66 L54 88" stroke="#7C3AED" stroke-width="9" stroke-linecap="round"/>
     <path d="M82 38 Q88 32 96 34" stroke="#FFFFFF" stroke-width="4" fill="none" stroke-linecap="round"/>`),

  throw: g("A soft ball flying toward a stack of cups",
    `<path d="M20 86 Q60 10 104 56" stroke="#7C3AED" stroke-width="3" stroke-dasharray="6 6" fill="none"/>
     <circle cx="24" cy="84" r="11" fill="#F43F5E"/><path d="M16 80 Q24 88 32 80" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
     <g fill="#F59E0B" stroke="#B45309" stroke-width="2"><path d="M102 98 L108 74 L124 74 L130 98 Z"/><path d="M128 98 L134 74 L150 74 L156 98 Z"/><path d="M115 74 L121 50 L137 50 L143 74 Z"/></g>`),

  listen: g("Sound waves coming from a loudspeaker",
    `<path d="M36 46 H52 L76 28 V82 L52 64 H36 Z" fill="#7C3AED"/>
     <g fill="none" stroke="#EC4899" stroke-width="7" stroke-linecap="round"><path d="M90 40 Q100 55 90 70"/><path d="M104 30 Q120 55 104 80"/><path d="M118 20 Q140 55 118 90"/></g>`),

  catch: g("Two children holding up a cloth arch for others to pass under",
    `<path d="M30 98 V40 Q80 0 130 40 V98" fill="none" stroke="#7C3AED" stroke-width="9" stroke-linecap="round"/>
     <path d="M30 40 Q80 0 130 40 L130 54 Q80 18 30 54 Z" fill="#EC4899" opacity=".85"/>
     <g fill="#F59E0B"><circle cx="64" cy="76" r="8"/><circle cx="84" cy="80" r="8"/><circle cx="104" cy="76" r="8"/></g>
     <g fill="#FBBF24"><rect x="58" y="86" width="12" height="14" rx="5"/><rect x="78" y="90" width="12" height="12" rx="5"/><rect x="98" y="86" width="12" height="14" rx="5"/></g>`),

  quiet: g("A sleepy moon with stars, for a quiet game",
    `<path d="M92 20 A34 34 0 1 0 122 74 A28 28 0 1 1 92 20 Z" fill="#FBBF24"/>
     <path d="M78 58 Q84 63 90 58" stroke="#B45309" stroke-width="3" fill="none" stroke-linecap="round"/>
     <g font-family="Poppins,sans-serif" font-weight="700" fill="#7C3AED"><text x="118" y="40" font-size="20">z</text><text x="134" y="24" font-size="14">z</text></g>
     <g fill="#FFFFFF"><circle cx="30" cy="30" r="3"/><circle cx="44" cy="84" r="2.5"/><circle cx="140" cy="88" r="3"/></g>`),

  relay: g("A running track with a flag at the finish",
    `<path d="M10 92 Q80 60 150 92" stroke="#F59E0B" stroke-width="16" fill="none" stroke-linecap="round"/>
     <path d="M10 92 Q80 60 150 92" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="8 8" fill="none"/>
     <path d="M120 82 V20" stroke="#7C3AED" stroke-width="5" stroke-linecap="round"/>
     <path d="M122 20 H148 L140 30 L148 40 H122 Z" fill="#EC4899"/>
     <g fill="#7C3AED"><path d="M34 54 L54 54 Q60 54 60 60 L58 66 L30 66 Q28 60 34 54 Z"/><path d="M28 66 H60" stroke="#7C3AED" stroke-width="4"/></g>
     <path d="M14 52 H26 M10 60 H24" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>`),

  guide: g("A winding path with arrows, for a guiding game",
    `<path d="M20 96 Q20 60 60 62 T100 34 T146 18" stroke="#F5DEB3" stroke-width="18" fill="none" stroke-linecap="round"/>
     <g fill="#7C3AED"><path d="M42 72 l12 -4 -6 10 z"/><path d="M84 46 l12 -6 -4 11 z"/><path d="M124 22 l13 -2 -8 9 z"/></g>
     <rect x="18" y="18" width="52" height="14" rx="7" fill="#EC4899"/><path d="M70 25 Q80 22 84 30 M70 25 Q78 32 74 38" stroke="#EC4899" stroke-width="4" fill="none" stroke-linecap="round"/>`),

  circle: g("Children in a circle passing a bundle",
    `<circle cx="80" cy="56" r="34" fill="none" stroke="#C4B5FD" stroke-width="3" stroke-dasharray="5 6"/>
     <g fill="#7C3AED"><circle cx="80" cy="18" r="9"/><circle cx="113" cy="37" r="9"/><circle cx="113" cy="75" r="9"/><circle cx="80" cy="94" r="9"/><circle cx="47" cy="75" r="9"/><circle cx="47" cy="37" r="9"/></g>
     <path d="M96 22 Q108 26 112 36" stroke="#EC4899" stroke-width="3" fill="none"/>
     <rect x="70" y="46" width="20" height="18" rx="5" fill="#F59E0B"/><path d="M80 46 V40 M74 42 Q80 36 86 42" stroke="#B45309" stroke-width="3" fill="none" stroke-linecap="round"/>`),

  collect: g("Colourful pieces dropping into a basket",
    `<g><circle cx="52" cy="22" r="6" fill="#F43F5E"/><circle cx="80" cy="14" r="6" fill="#22C55E"/><circle cx="106" cy="24" r="6" fill="#3B82F6"/><circle cx="66" cy="40" r="5" fill="#FBBF24"/><circle cx="96" cy="44" r="5" fill="#EC4899"/></g>
     <path d="M30 56 H130 L118 100 H42 Z" fill="#D97706"/><path d="M36 72 H124 M40 86 H120" stroke="#92400E" stroke-width="3" opacity=".5"/>
     <path d="M26 52 H134 Q136 52 134 60 H26 Q24 52 26 52 Z" fill="#B45309"/>`),

  count: g("One coin turning into four coins",
    `<g fill="#FBBF24" stroke="#B45309" stroke-width="2.5"><ellipse cx="36" cy="66" rx="18" ry="8"/></g>
     <path d="M62 60 H86 M78 52 L88 60 L78 68" stroke="#7C3AED" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
     <g fill="#FBBF24" stroke="#B45309" stroke-width="2.5"><ellipse cx="122" cy="88" rx="18" ry="8"/><ellipse cx="122" cy="74" rx="18" ry="8"/><ellipse cx="122" cy="60" rx="18" ry="8"/><ellipse cx="122" cy="46" rx="18" ry="8"/></g>
     <text x="102" y="28" font-family="Poppins,sans-serif" font-weight="700" font-size="18" fill="#EC4899">×4</text>`),
};

// soft tile colour behind each game picture
export const GAME_KIND_BG = {
  pairs: "#FCE7F3", actions: "#FEF3C7", search: "#E0F2FE", throw: "#FFE4E6", listen: "#EDE9FE", catch: "#FAE8FF",
  quiet: "#E0E7FF", relay: "#DCFCE7", guide: "#FFF7ED", circle: "#F3E8FF", collect: "#ECFCCB", count: "#FEF9C3",
};
