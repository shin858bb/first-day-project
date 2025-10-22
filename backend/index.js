const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// JSON ボディを扱う
app.use(express.json());
// public フォルダを静的配信
app.use(express.static('public'));

// ヘルスチェック
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 時刻 API
app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

/*
  簡易 in-memory Todo API
  - GET /api/todos
  - POST /api/todos { text }
  - PUT /api/todos/:id  body { text? , toggleDone? }
  - DELETE /api/todos/:id
*/
let todos = [];
let nextId = 1;

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const { text } = req.body || {};
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'text is required' });
  }
  const todo = { id: String(nextId++), text: text.trim(), done: false, createdAt: new Date().toISOString() };
  todos.push(todo);
  res.status(201).json(todo);
});

app.put('/api/todos/:id', (req, res) => {
  const id = String(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: 'not found' });
  const { text, toggleDone } = req.body || {};
  if (typeof text === 'string') todo.text = text.trim();
  if (toggleDone) todo.done = !todo.done;
  res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
  const id = String(req.params.id);
  const before = todos.length;
  todos = todos.filter(t => t.id !== id);
  if (todos.length === before) return res.status(404).json({ error: 'not found' });
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
