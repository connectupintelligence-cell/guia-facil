with open(r'C:\Users\felip\.gemini\antigravity\scratch\guia-facil\generate_full_app_code.py', 'r', encoding='utf-8') as f:
    text = f.read()

dup = '''  const prompt = message.toLowerCase().trim();
  const city = getCurrentCity();
  const profile = state.touristProfile || 'geral';
  let reply = '';'''

if dup in text:
    text = text.replace(dup, '', 1)
    with open(r'C:\Users\felip\.gemini\antigravity\scratch\guia-facil\generate_full_app_code.py', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Removed duplicate in generate_full_app_code.py")
else:
    print("dup not found in generate_full_app_code.py")
