import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Copy } from 'lucide-react'
import './php.css'

export default function PhpPage(){
  const progressRef = useRef(null)
  useEffect(()=>{
    // Animate progress bar once
    const el = progressRef.current
    if(!el) return
    requestAnimationFrame(()=>{
      el.style.width = '92%'
    })
  },[])

  const copyCode = (id) => {
    const el = document.getElementById(id)
    if(!el) return
    const code = el.textContent || ''
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="php-theme php-bg min-h-screen rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        {/* HERO */}
        <section className="php-hero">
          <div className="php-badge">🚀 PHP MASTERY</div>
          <h1 className="php-title">Guia PHP Full-Stack</h1>
          <p className="php-sub">Um mapa completo — prático e direto — dos tópicos que um(a) dev full‑stack precisa dominar em PHP.</p>
          <div className="php-progress" aria-hidden>
            <span ref={progressRef} />
          </div>
          <p className="text-center text-sm" style={{color:'var(--php-text-soft)'}}>92% • 2847</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="#fundamentos" className="php-copy">▶️ Começar</a>
            <button className="php-copy">📄 PDF</button>
          </div>
        </section>

        {/* GRID LAYOUT */}
        <div className="mt-8 php-layout">
          <aside className="php-sidebar rounded-xl hidden md:block">
            <h3>Seções</h3>
            <ul>
              <li><a href="#fundamentos" className="active">1. Fundamentos</a></li>
              <li><a href="#oop">2. OOP Moderna</a></li>
              <li><a href="#io-streams">3. I/O & Streams</a></li>
              <li><a href="#web-http">4. Web & HTTP</a></li>
              <li><a href="#seguranca">5. Segurança</a></li>
            </ul>
          </aside>

          <main className="php-main">
            {/* Seção: Fundamentos */}
            <motion.section id="fundamentos" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-80px'}} transition={{duration:.5}} className="php-section">
              <div className="php-section-header">
                <h2 className="php-section-title"><span>🏗️</span> 1. Fundamentos da Linguagem</h2>
              </div>

              <div className="php-grid">
                <div className="php-chip">
                  <div className="font-semibold" style={{color:'#A855F7'}}>🌐 Ambiente & Execução</div>
                  <div className="text-sm" style={{color:'var(--php-text-soft)'}}>CLI, Apache + mod_php, Nginx + PHP‑FPM, php.ini</div>
                </div>
                <div className="php-chip">
                  <div className="font-semibold" style={{color:'#A855F7'}}>⚡ Performance Engine</div>
                  <div className="text-sm" style={{color:'var(--php-text-soft)'}}>OPcache (preloading), JIT — quando e por que usar</div>
                </div>
                <div className="php-chip">
                  <div className="font-semibold" style={{color:'#A855F7'}}>📝 Sintaxe Básica</div>
                  <div className="text-sm" style={{color:'var(--php-text-soft)'}}>Tags &lt;?php ?&gt;, echo vs print, include/require</div>
                </div>
                <div className="php-chip">
                  <div className="font-semibold" style={{color:'#A855F7'}}>🔤 Sistema de Tipos</div>
                  <div className="text-sm" style={{color:'var(--php-text-soft)'}}>Escalares, compostos, union/nullable, mixed</div>
                </div>
              </div>

              <div className="mt-4 php-card">
                <div className="php-code-toolbar">
                  <span className="text-sm" style={{color:'#A855F7'}}>FUNDAMENTOS MODERNOS</span>
                  <button className="php-copy" onClick={()=>copyCode('fundamentos-code')}><Copy className="w-4 h-4 inline mr-1"/>Copiar</button>
                </div>
                <pre id="fundamentos-code" className="php-code" aria-label="Fundamentos PHP"><code>{`<?php
declare(strict_types=1);

// Union types & nullable
function processData(int|string $data): ?array 
{
    return match($data) {
        'reset' => null,
        default => [$data]
    };
}

// Named arguments & arrow functions
$users = array_filter(
    $data,
    fn($user) => $user?->isActive() ?? false
);

// Variadic functions
function sum(int ...$numbers): int 
{
    return array_sum($numbers);
}

// Modern datetime
$date = new DateTimeImmutable('2024-01-01');
$interval = DateInterval::createFromDateString('1 month');
$future = $date->add($interval);
`}</code></pre>
              </div>
            </motion.section>

            {/* Seção: OOP */}
            <motion.section id="oop" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-80px'}} transition={{duration:.5, delay:.05}} className="php-section">
              <div className="php-section-header">
                <h2 className="php-section-title"><span>🎯</span> 2. OOP Moderna</h2>
              </div>
              <div className="php-card">
                <div className="php-code-toolbar">
                  <span className="text-sm" style={{color:'#A855F7'}}>PHP 8+ OOP</span>
                  <button className="php-copy" onClick={()=>copyCode('oop-code')}><Copy className="w-4 h-4 inline mr-1"/>Copiar</button>
                </div>
                <pre id="oop-code" className="php-code" aria-label="OOP PHP"><code>{`<?php
// Promoted properties + readonly
readonly class UserDto 
{
    public function __construct(
        public string $name,
        public string $email,
        public Status $status = Status::ACTIVE
    ) {}
}

enum Status: string 
{
    case ACTIVE = 'active';
    case INACTIVE = 'inactive';

    public function isActive(): bool { return $this === self::ACTIVE; }
}

#[Route('/api/users', methods: ['GET'])]
#[Cache(ttl: 300)]
class UserController 
{
    public function getProfile(?User $user): ?string 
    {
        return $user?->profile?->getBio();
    }
}
`}</code></pre>
              </div>
            </motion.section>

            {/* Seção: I/O & Streams */}
            <motion.section id="io-streams" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-80px'}} transition={{duration:.5, delay:.1}} className="php-section">
              <div className="php-section-header">
                <h2 className="php-section-title"><span>💾</span> 3. I/O, Streams e Baixo Nível</h2>
              </div>
              <div className="php-card">
                <div className="php-code-toolbar">
                  <span className="text-sm" style={{color:'#A855F7'}}>STREAMS & I/O</span>
                  <button className="php-copy" onClick={()=>copyCode('io-code')}><Copy className="w-4 h-4 inline mr-1"/>Copiar</button>
                </div>
                <pre id="io-code" className="php-code" aria-label="Streams PHP"><code>{`<?php
$context = stream_context_create([
  'http' => [
    'method' => 'POST',
    'header' => 'Content-Type: application/json',
    'content' => json_encode(['data' => 'value']),
    'timeout' => 30
  ]
]);
$response = file_get_contents('https://api.example.com', false, $context);

// File operations with locking
$file = 'data.txt';
$handle = fopen($file, 'c+');
if (flock($handle, LOCK_EX)) {
  $data = stream_get_contents($handle);
  ftruncate($handle, 0);
  rewind($handle);
  fwrite($handle, json_encode($newData));
  flock($handle, LOCK_UN);
}
fclose($handle);
`}</code></pre>
              </div>
            </motion.section>

            {/* Seção: Web & HTTP */}
            <motion.section id="web-http" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-80px'}} transition={{duration:.5, delay:.15}} className="php-section">
              <div className="php-section-header">
                <h2 className="php-section-title"><span>🌐</span> 4. Web: HTTP com PHP</h2>
              </div>
              <div className="php-grid">
                <div className="php-chip"><div className="font-semibold" style={{color:'#A855F7'}}>📡 Superglobais Seguras</div><div className="text-sm" style={{color:'var(--php-text-soft)'}}>Uso seguro de $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION</div></div>
                <div className="php-chip"><div className="font-semibold" style={{color:'#A855F7'}}>📁 Upload Seguro</div><div className="text-sm" style={{color:'var(--php-text-soft)'}}>move_uploaded_file, validação MIME</div></div>
                <div className="php-chip"><div className="font-semibold" style={{color:'#A855F7'}}>🔐 Sessões Avançadas</div><div className="text-sm" style={{color:'var(--php-text-soft)'}}>Cookies Secure, HttpOnly, SameSite; handlers Redis</div></div>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  )
}
