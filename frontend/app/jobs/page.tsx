'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/jobs')
      .then(res => res.json())
      .then(data => { setJobs(data); setLoading(false); });
  }, []);

  if (loading) return <p style={{ padding: 40 }}>Loading jobs...</p>;

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 24 }}>
      <h1>All Jobs</h1>
      {jobs.length === 0 && <p>No jobs posted yet.</p>}
      {jobs.map((job: any) => (
        <div key={job.id} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, marginBottom: 16 }}>
          <h2 style={{ margin: 0 }}>{job.title}</h2>
          <p style={{ color: '#6b7280' }}>{job.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
            {job.requiredSkills?.map((skill: string) => (
              <span key={skill} style={{ background: '#ede9fe', color: '#4f46e5', padding: '2px 10px', borderRadius: 20, fontSize: 13 }}>
                {skill}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#9ca3af' }}>
            Deadline: {new Date(job.deadline).toLocaleDateString()}
          </p>
          <Link href={`/jobs/${job.id}`}>
            <button style={{ background: '#4f46e5', color: 'white', padding: '8px 20px', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
              View & Apply
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}