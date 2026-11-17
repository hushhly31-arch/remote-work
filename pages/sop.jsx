import Head from 'next/head';
import { Fragment } from 'react';

const s = (n = 1) => ({ marginBottom: `${n}rem` });
const h3 = { fontSize: '1.1rem', fontWeight: 700, margin: '1.75rem 0 0.75rem' };
const h4 = { fontSize: '1rem', fontWeight: 700, margin: '1.1rem 0 0.4rem' };
const p = { margin: '0 0 0.6rem', lineHeight: 1.7, fontSize: '0.95rem' };
const ul = { margin: '0 0 0.75rem', paddingLeft: '1.2rem', lineHeight: 1.7, fontSize: '0.95rem' };
const table = { width: '100%', borderCollapse: 'collapse', margin: '0.5rem 0 1rem', fontSize: '0.92rem' };
const thtd = { border: '1px solid var(--border-light, #e5e7eb)', padding: '0.55rem 0.7rem', textAlign: 'left', verticalAlign: 'top' };
const th = { ...thtd, background: 'var(--bg-warm, #f8f6f2)', fontWeight: 700 };
const box = { background: 'var(--bg-warm, #f8f6f2)', border: '1px solid var(--border-light, #e5e7eb)', borderRadius: 'var(--radius-md, 8px)', padding: '1rem 1.1rem', marginBottom: '1rem' };

export default function SopPage() {
  return (
    <Fragment>
      <Head><title>SOP Remote Work — Remote Work Training</title></Head>
      <div className="page-header">
        <p className="eyebrow">Panduan Klien & Freelancer</p>
        <h1 className="page-title-main">SOP Kerja Remote Arsitektur (UK / US / Global)</h1>
        <p className="text-secondary" style={{ maxWidth: 900 }}>Panduan standar kerja remote: rantai kerja, tahapan proyek, BIM, standar gambar, kode/regulasi, skill teknis, SOP harian, dan roadmap agar klien dan freelancer selaras.</p>
      </div>

      <div className="section-block">
        <h3 style={h3}>1. Posisimu dalam rantai kerja</h3>
        <p style={p}>Hampir semua klien luar negeri akan memperlakukanmu sebagai subkontraktor produksi:</p>
        <ul style={ul}>
          <li><strong>Tanggung jawab hukum dan stempel/lisensi</strong> tetap di arsitek atau engineer klien.</li>
          <li><strong>Tugasmu:</strong> memproduksi model dan gambar yang akurat, konsisten, sesuai standar kantor klien, dan tepat waktu.</li>
          <li><strong>Nilai jualmu:</strong> kecepatan, ketelitian, pemahaman standar, dan komunikasi yang rapi.</li>
        </ul>
        <div style={box}>
          <strong>SOP yang perlu dikuasai (3 lapis):</strong> (a) tahapan proyek, (b) standar dokumentasi/BIM, (c) kode bangunan dan budaya setiap region.
        </div>
      </div>

      <div className="section-block">
        <h3 style={h3}>2. Tahapan proyek (project stages)</h3>
        <h4 style={h4}>UK: RIBA Plan of Work 2020</h4>
        <table style={table}><thead><tr><th style={th}>Stage</th><th style={th}>Nama</th><th style={th}>Inti</th></tr></thead><tbody>
          {[['0','Strategic Definition','kebutuhan klien, business case'],['1','Preparation & Briefing','brief, studi kelayakan, survei'],['2','Concept Design','konsep, massing, test fit'],['3','Spatial Coordination','koordinasi arsitek–struktur–MEP, planning application'],['4','Technical Design','gambar teknis, spesifikasi, Building Regulations'],['5','Manufacturing & Construction','shop drawings, RFI, site'],['6','Handover','as-built, O&M manual'],['7','Use','operasional']].map(r=>(<tr key={r[0]}><td style={thtd}>{r[0]}</td><td style={thtd}>{r[1]}</td><td style={thtd}>{r[2]}</td></tr>))}
        </tbody></table>
        <p style={p}>Rujukan: RIBA Plan of Work 2020 Overview (situs RIBA).</p>

        <h4 style={h4}>US: fase AIA</h4>
        <p style={p}>Pre-Design → Schematic Design (SD) → Design Development (DD) → Construction Documents (CD) → Bidding/Negotiation → Construction Administration (CA).</p>
        <p style={p}><strong>Istilah wajib:</strong> RFI, submittal, ASI (Architect’s Supplemental Instruction), bulletin, addendum, punch list, change order.</p>

        <h4 style={h4}>Timur Tengah (UAE/KSA/Qatar)</h4>
        <p style={p}>Umumnya gabungan gaya UK dan US: Concept → Schematic → Detailed Design → Authority Approval → Tender → IFC (Issued for Construction) → Shop Drawings → As-Built. Persetujuan otoritas (municipality, civil defense, utilitas) sangat menentukan jadwal.</p>
      </div>

      <div className="section-block">
        <h3 style={h3}>3. BIM dan manajemen informasi (wajib untuk remote)</h3>
        <p style={p}>Area paling bernilai karena klien remote sangat bergantung pada disiplin file.</p>
        <ul style={ul}>
          <li><strong>ISO 19650 (Part 1 & 2):</strong> EIR (Employer’s Information Requirements), BEP (BIM Execution Plan), MIDP/TIDP, CDE (Common Data Environment), status WIP / Shared / Published / Archive.</li>
          <li><strong>UK BIM Framework:</strong> panduan dan template (ukbimframework.org).</li>
          <li><strong>Naming convention ISO 19650:</strong> Project-Originator-Volume-Level-Type-Role-Number (dipakai luas di UK & Timur Tengah).</li>
          <li><strong>Konsep:</strong> LOD/LOIN (Level of Information Need), IFC, COBie, BCF (issue tracking).</li>
          <li><strong>US:</strong> National BIM Standard (NBIMS-US), AIA G202/E203 (BIM protocol & LOD spec).</li>
          <li><strong>Revit:</strong> shared coordinates, worksets, linked models, design options, phasing, family management, model audit/purge.</li>
        </ul>
        <p style={p}><strong>Platform CDE:</strong> Autodesk Construction Cloud (BIM 360), Trimble Connect, Aconex, Revizto, Procore (US), SharePoint.</p>
      </div>

      <div className="section-block">
        <h3 style={h3}>4. Standar gambar (CAD/drafting standards)</h3>
        <ul style={ul}>
          <li><strong>US:</strong> National CAD Standard (NCS), AIA CAD Layer Guidelines; sheet numbering (A-101, A-201), discipline designators; satuan feet-inch.</li>
          <li><strong>UK:</strong> BS 8541 series, BS EN ISO 7519, UK NBS Chorus/BIM Toolkit; satuan metrik (mm).</li>
          <li><strong>Timur Tengah:</strong> biasanya ikut standar kantor konsultan (campuran BS/ISO); metrik; sering bilingual untuk tag tertentu.</li>
        </ul>
        <p style={p}><strong>Wajib bisa:</strong> sheet/title block, revision cloud + revision schedule, drawing register/issue sheet/transmittal, skala/line weights/hatching/dimensioning, door/window/finish schedules, section/detail callouts, legend simbol, north point, grid & level.</p>
      </div>

      <div className="section-block">
        <h3 style={h3}>5. Kode, regulasi, dan standar per region</h3>
        <h4 style={h4}>🇬🇧 UK</h4>
        <ul style={ul}>
          <li>Building Regulations 2010 & Approved Documents (gov.uk): A (struktur), B (fire), C, E (suara), F (ventilasi), L (energi), M (akses), O (overheating), P, Q, R, S.</li>
          <li>Building Safety Act 2022 (gateway, higher-risk buildings, “golden thread”).</li>
          <li>Planning: NPPF, Local Plan, Design & Access Statement. CDM Regulations 2015 (H&S, Principal Designer).</li>
          <li>BS 9999/9991 (fire), BS 8300 (inclusive design), Eurocodes + UK NA. Spesifikasi: NBS. Kontrak: JCT, NEC4, RIBA. Sustainability: BREEAM, Part L, SAP/SBEM.</li>
        </ul>
        <h4 style={h4}>🇺🇸 US</h4>
        <ul style={ul}>
          <li>IBC/IRC + amandemen negara/kota (CBC, NYC BC, Florida FBC, dll.); akses baca di codes.iccsafe.org.</li>
          <li>ADA 2010 Standards, ICC A117.1 (aksesibilitas). NFPA 101/13/72 (fire/life safety).</li>
          <li>ASHRAE 90.1/IECC (energi), ASCE 7 (beban), ACI/AISC (struktur). CSI MasterFormat 2018 & UniFormat. Kontrak: AIA A201, B101. Sustainability: LEED, WELL, Energy Star.</li>
          <li>Pahami occupancy classification, construction type, allowable area/height, egress (inti IBC).</li>
        </ul>
        <h4 style={h4}>🇦🇪🇸🇦🇶🇦 Timur Tengah</h4>
        <ul style={ul}>
          <li><strong>UAE:</strong> Dubai Building Code, DM/Trakhees/DDA, ADIBC & DMT/ADM, UAE Fire and Life Safety Code (Civil Defence), Estidama (Abu Dhabi), Al Sa’fat (Dubai).</li>
          <li><strong>Saudi Arabia:</strong> Saudi Building Code (SBC), Mostadam, Balady/Monshaat.</li>
          <li><strong>Qatar:</strong> QCS, GSAS, Civil Defence.</li>
          <li><strong>Faktor regional:</strong> iklim panas (shading, glazing, cooling), privasi (villa, mashrabiya), majlis, ruang sholat/orientasi qibla, zonasi terpisah (proyek tertentu), fire code ketat & peran Civil Defence; proyek besar sering punya design guidelines khusus.</li>
        </ul>
      </div>

      <div className="section-block">
        <h3 style={h3}>6. Fundamental desain teknis yang harus dikuasai</h3>
        <ul style={ul}>
          <li>Space planning & ergonomi (Neufert, Metric Handbook).</li>
          <li>Egress & fire: travel distance, exit width, compartmentation, fire rating, stair/lobby.</li>
          <li>Accessibility: ramp, lift, toilet, door clearance.</li>
          <li>Building envelope: wall/roof build-up, U-value, waterproofing, thermal bridge, curtain wall.</li>
          <li>Detailing: sill, threshold, parapet, expansion/movement joint.</li>
          <li>Koordinasi struktur & MEP: grid, floor-to-floor, ceiling void, riser, clash detection.</li>
          <li>Vertical transport, parkir, fasad. Spesifikasi/material (finish schedule, product data).</li>
          <li>Sustainability: passive design, daylight, embodied carbon.</li>
        </ul>
      </div>

      <div className="section-block">
        <h3 style={h3}>7. Software dan skill teknis</h3>
        <ul style={ul}>
          <li><strong>Wajib:</strong> Revit, AutoCAD.</li>
          <li><strong>Sangat berguna:</strong> Navisworks (clash), Bluebeam Revu (markup, dominan di US), Dynamo, Rhino/Grasshopper.</li>
          <li><strong>Visualisasi:</strong> Enscape, Twinmotion, D5, V-Ray.</li>
          <li><strong>Kolaborasi:</strong> Teams/Slack, ACC, Revizto, Miro.</li>
          <li><strong>Sertifikasi:</strong> Autodesk Certified Professional (Revit), buildingSMART Professional (ISO 19650/IFC), kursus BIM Level 2 / ISO 19650 (BRE, BSI, Autodesk).</li>
        </ul>
      </div>

      <div className="section-block">
        <h3 style={h3}>8. SOP kerja remote (yang membedakan profesional)</h3>
        <h4 style={h4}>Workflow harian</h4>
        <ol style={{ ...ul, paddingLeft: '1.25rem' }}>
          <li>Terima tugas & pahami scope: apa, level detail, deadline, format.</li>
          <li>Baca BEP/standar kantor klien sebelum menyentuh model.</li>
          <li>Kerjakan di model/central file sesuai aturan (workset, naming, versioning).</li>
          <li>Self-check sebelum kirim (lihat checklist).</li>
          <li>Kirim dengan transmittal/pesan rapi: apa yang berubah, belum, pertanyaan terbuka.</li>
          <li>Catat revisi dan feedback di log.</li>
        </ol>
        <h4 style={h4}>Checklist QA sebelum submit</h4>
        <ul style={ul}>
          <li>[ ] Sheet number/title/revision benar, title block terisi</li>
          <li>[ ] Tidak ada warning kritis, model sudah di-audit/purge</li>
          <li>[ ] Dimensi, level, grid, tag, schedule konsisten antar sheet</li>
          <li>[ ] Notasi dan layer sesuai standar klien</li>
          <li>[ ] Referensi section/detail tidak putus</li>
          <li>[ ] Satuan sesuai (mm vs ft-in)</li>
          <li>[ ] File naming sesuai convention</li>
          <li>[ ] Perubahan sudah dicloud dan dilog</li>
        </ul>
        <h4 style={h4}>Komunikasi</h4>
        <ul style={ul}>
          <li>Tulis jelas & singkat; tanyakan ambiguitas sebelum mengerjakan jauh.</li>
          <li>Kelola time zone: UK (GMT/BST), US (EST–PST), Gulf (GMT+3/+4). Sepakati jam overlap.</li>
          <li>Beri update proaktif; jangan diam saat terhalang.</li>
        </ul>
        <h4 style={h4}>Bisnis dan legal</h4>
        <ul style={ul}>
          <li>NDA & keamanan data (jangan simpan file klien di perangkat pribadi tanpa izin).</li>
          <li>Kontrak: scope, jumlah revisi, hak cipta (biasanya milik klien), pembayaran, terminasi.</li>
          <li>Pembayaran: Wise, Payoneer, transfer; pahami kewajiban pajak sebagai freelancer di Indonesia.</li>
          <li>Jangan mengklaim lisensi atau mengambil tanggung jawab yang bukan wewenangmu.</li>
        </ul>
      </div>

      <div className="section-block">
        <h3 style={h3}>9. Daftar bacaan (urut prioritas)</h3>
        <p style={p}><strong>Gratis / online:</strong> RIBA Plan of Work 2020 Overview; UK Building Regulations: Approved Documents (gov.uk, mulai B, M, L); UK BIM Framework (ukbimframework.org); ICC Digital Codes (codes.iccsafe.org — IBC Ch. 3,5,6,7,9,10,11); National CAD Standard (NIBS/buildingSMART); situs resmi Dubai Municipality, ADM, Civil Defence UAE, Saudi Building Code Committee; dokumentasi Autodesk Revit & pembelajaran BIM.</p>
        <p style={p}><strong>Buku:</strong> Neufert (Architects’ Data); Metric Handbook (Pamela Buxton); Building Construction Illustrated (F.D.K. Ching); Fundamentals of Building Construction (Allen & Iano); Time-Saver Standards for Architectural Design; Mechanical and Electrical Equipment for Buildings (Grondzik); Architect’s Handbook of Professional Practice (AIA); panduan ISO 19650 (BSI/BRE).</p>
      </div>

      <div className="section-block">
        <h3 style={h3}>10. Roadmap 90 hari</h3>
        <div style={box}><strong>Bulan 1 — Fondasi:</strong> RIBA stages + AIA phases, istilah & sheet organization; Revit menengah (families, schedules, sheets, worksets); Approved Document B & M dan ringkasan egress/accessibility IBC.</div>
        <div style={box}><strong>Bulan 2 — Standar dan BIM:</strong> ISO 19650 + naming convention, praktik CDE (ACC trial); NCS & UK drafting standards; 1 proyek latihan lengkap (villa/low-rise) concept sampai CD.</div>
        <div style={box}><strong>Bulan 3 — Portofolio dan pasar:</strong> 3 sample project — UK (metrik, Part M/B), US (IBC/ADA, ft-in), Gulf (villa/mid-rise, privasi & fire code regional); portofolio set gambar + model Revit + BEP mini; mulai melamar (LinkedIn: “BIM Modeller/Architectural Technician/Revit Technician remote”, Upwork/Fiverr, studio outsourcing BIM, konsultan Gulf, firma kecil UK/US).</div>
      </div>
    </Fragment>
  );
}
