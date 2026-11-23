// Tiny formatter for content files: **bold**, *italic*, blank line = new paragraph.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const inline = (s = '') =>
  esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
export const paragraphs = (s = '') =>
  s.trim().split(/\n\s*\n/).map((p) => `<p>${inline(p.trim())}</p>`).join('');
