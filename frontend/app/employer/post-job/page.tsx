'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SKILLS_LIST = ['React', 'Node.js', 'NestJS', 'Python', 'Java', 'CSS', 'SQL', 'TypeScript', 'MongoDB'];

export default function PostJobPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    description: '',
    requiredSkills: [] as string[],
    deadline: '',
  });

  const toggleSkill = (skill: string) => {
    setForm(prev => ({
      ...prev,
      requiredSkills: prev.requiredSkills.includes(skill)
        ? prev.requiredSkills.filter(s => s !== skill)
        : [...prev.requiredSkills, skill],
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('✅ Job posted successfully!');
      router.push('/jobs');
    } else {
      alert('❌ Something went wrong. Are you logged in as employer?');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24 }}>
      <h1>Post a New Job</h1>

      <label>Job Title</label>
      <input
        style={{ display: 'block', width: '100%', marginBottom: 16, padding: 8 }}
        placeholder="e.g. Frontend Developer"
        onChange={e => setForm({ ...form, title: e.target.value })}
      />

      <label>Description</label>
      <textarea
        style={{ display: 'block', width: '100%', marginBottom: 16, padding: 8, height: 120 }}
        placeholder="Describe the job role..."
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      <label>Required Skills</label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        {SKILLS_LIST.map(skill => (
          <button
            key={skill}
            onClick={() => toggleSkill(skill)}
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              border: 'none',
              cursor: 'pointer',
              background: form.requiredSkills.includes(skill) ? '#4f46e5' : '#e5e7eb',
              color: form.requiredSkills.includes(skill) ? 'white' : 'black',
            }}
          >
            {skill}
          </button>
        ))}
      </div>

      <label>Application Deadline</label>
      <input
        type="date"
        style={{ display: 'block', width: '100%', marginBottom: 24, padding: 8 }}
        onChange={e => setForm({ ...form, deadline: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        style={{ background: '#4f46e5', color: 'white', padding: '12px 32px', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 16 }}
      >
        Post Job
      </button>
    </div>
  );
}