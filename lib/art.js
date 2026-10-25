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
