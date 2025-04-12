INSERT INTO
  auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    invited_at,
    confirmation_token,
    confirmation_sent_at,
    recovery_token,
    recovery_sent_at,
    email_change_token_new,
    email_change,
    email_change_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    created_at,
    updated_at,
    phone,
    phone_confirmed_at,
    phone_change,
    phone_change_token,
    phone_change_sent_at,
    email_change_token_current,
    email_change_confirm_status,
    banned_until,
    reauthentication_token,
    reauthentication_sent_at,
    is_sso_user,
    deleted_at,
    is_anonymous
  )
VALUES
  (
    '00000000-0000-0000-0000-000000000000',
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'authenticated',
    'authenticated',
    'user@example.com',
    '$2a$10$nnqTShcTX48N6QWWjbPUee.wrGz1kGx/uq5lORviCm.fn04W1BeRe',
    '2024-09-01 17:21:01.462788+00',
    NULL,
    '',
    NULL,
    '',
    NULL,
    '',
    '',
    NULL,
    NULL,
    '{"provider": "email", "providers": ["email"]}',
    '{"username": "username", "full_name": "Test User"}',
    NULL,
    '2024-09-01 17:21:01.455486+00',
    '2024-09-01 17:21:01.46295+00',
    NULL,
    NULL,
    '',
    '',
    NULL,
    '',
    0,
    NULL,
    '',
    NULL,
    false,
    NULL,
    false
  );

INSERT INTO
  auth.identities (
    provider_id,
    user_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at,
    id
  )
VALUES
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    '{"sub": "aec53558-767e-4408-b4d6-1c1e6f17ffe5", "email": "user@example.com", "email_verified": false, "phone_verified": false}',
    'email',
    '2024-09-01 17:21:01.459821+00',
    '2024-09-01 17:21:01.459849+00',
    '2024-09-01 17:21:01.459849+00',
    'c5e81668-437b-47c2-83e2-84b8566b3018'
  );

-- Seed data for posts
INSERT INTO
  posts (user_id, title, content)
VALUES
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'React Server Components: A Game Changer',
    'React Server Components are revolutionizing how we build React applications. They allow for better performance and smaller bundle sizes by running components on the server. This new paradigm is especially powerful when combined with frameworks like Next.js 13+.'
  ),
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'The Rise of Bun: A New JavaScript Runtime',
    'Bun is gaining traction as a fast all-in-one JavaScript runtime. It aims to replace Node.js, npm, yarn, and more. With its focus on performance and developer experience, Bun is definitely worth keeping an eye on in 2024.'
  ),
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'TypeScript 5.0: What''s New and Exciting',
    'TypeScript 5.0 brings several new features and improvements, including decorators, const type parameters, and more. These enhancements continue to make TypeScript an essential tool for building robust JavaScript applications.'
  ),
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'The State of JavaScript Frameworks in 2024',
    'While React remains dominant, frameworks like Svelte and Solid are gaining popularity for their performance and simplicity. Meanwhile, meta-frameworks like Next.js and Remix are becoming increasingly important in the React ecosystem.'
  );

-- =====================
-- Teams Seed Data
-- =====================

-- Disable only user-defined triggers
alter table team_members disable trigger user;
alter table team_invitations disable trigger user;

-- Create auth entries for team users
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    is_super_admin,
    is_sso_user
)
VALUES
    (
        '00000000-0000-0000-0000-000000000000',
        'd0d54aa8-9e37-4aa9-a1b2-b8f0b8d8a1d2',
        'authenticated',
        'authenticated',
        'john@example.com',
        '$2a$10$nnqTShcTX48N6QWWjbPUee.wrGz1kGx/uq5lORviCm.fn04W1BeRe',
        now(),
        '{"provider": "email", "providers": ["email"]}',
        '{"full_name": "John Doe"}',
        now(),
        now(),
        false,
        false
    ),
    (
        '00000000-0000-0000-0000-000000000000',
        'e1e65bb9-0f48-5bb3-b2c3-c9f1c9e9b2e3',
        'authenticated',
        'authenticated',
        'jane@example.com',
        '$2a$10$nnqTShcTX48N6QWWjbPUee.wrGz1kGx/uq5lORviCm.fn04W1BeRe',
        now(),
        '{"provider": "email", "providers": ["email"]}',
        '{"full_name": "Jane Smith"}',
        now(),
        now(),
        false,
        false
    ),
    (
        '00000000-0000-0000-0000-000000000000',
        'f2f76cc0-1f59-6cc4-c3d4-d0f2d0f0c3f4',
        'authenticated',
        'authenticated',
        'bob@example.com',
        '$2a$10$nnqTShcTX48N6QWWjbPUee.wrGz1kGx/uq5lORviCm.fn04W1BeRe',
        now(),
        '{"provider": "email", "providers": ["email"]}',
        '{"full_name": "Bob Johnson"}',
        now(),
        now(),
        false,
        false
    )
ON CONFLICT (id) DO NOTHING;

-- Create auth identities for team users
INSERT INTO auth.identities (
    id,
    user_id,
    provider_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at
)
VALUES
    (
        'c6e81668-437b-47c2-83e2-84b8566b3019',
        'd0d54aa8-9e37-4aa9-a1b2-b8f0b8d8a1d2',
        'd0d54aa8-9e37-4aa9-a1b2-b8f0b8d8a1d2',
        format('{"sub": "%s", "email": "%s", "email_verified": false, "phone_verified": false}',
            'd0d54aa8-9e37-4aa9-a1b2-b8f0b8d8a1d2', 'john@example.com')::jsonb,
        'email',
        now(),
        now(),
        now()
    ),
    (
        'c7e81668-437b-47c2-83e2-84b8566b3020',
        'e1e65bb9-0f48-5bb3-b2c3-c9f1c9e9b2e3',
        'e1e65bb9-0f48-5bb3-b2c3-c9f1c9e9b2e3',
        format('{"sub": "%s", "email": "%s", "email_verified": false, "phone_verified": false}',
            'e1e65bb9-0f48-5bb3-b2c3-c9f1c9e9b2e3', 'jane@example.com')::jsonb,
        'email',
        now(),
        now(),
        now()
    ),
    (
        'c8e81668-437b-47c2-83e2-84b8566b3021',
        'f2f76cc0-1f59-6cc4-c3d4-d0f2d0f0c3f4',
        'f2f76cc0-1f59-6cc4-c3d4-d0f2d0f0c3f4',
        format('{"sub": "%s", "email": "%s", "email_verified": false, "phone_verified": false}',
            'f2f76cc0-1f59-6cc4-c3d4-d0f2d0f0c3f4', 'bob@example.com')::jsonb,
        'email',
        now(),
        now(),
        now()
    )
ON CONFLICT (id) DO NOTHING;

-- Create sample users for teams
INSERT INTO users (id, email, full_name, avatar_url)
VALUES
    ('d0d54aa8-9e37-4aa9-a1b2-b8f0b8d8a1d2', 'john@example.com', 'John Doe', 'https://api.dicebear.com/7.x/avataaars/svg?seed=john'),
    ('e1e65bb9-0f48-5bb3-b2c3-c9f1c9e9b2e3', 'jane@example.com', 'Jane Smith', 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane'),
    ('f2f76cc0-1f59-6cc4-c3d4-d0f2d0f0c3f4', 'bob@example.com', 'Bob Johnson', 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob')
ON CONFLICT (id) DO NOTHING;

-- Create sample teams
INSERT INTO teams (id, name, description, visibility, avatar_url, max_members)
VALUES
    ('a1a43991-7e26-499b-91b2-b8f0b8d8a1d2', 'Engineering Team', 'Core engineering team', 'private', 'https://api.dicebear.com/7.x/identicon/svg?seed=engineering', 10),
    ('b2b54002-8f37-500c-02c3-c9f1c9e9b2e3', 'Marketing Team', 'Marketing and communications', 'public', 'https://api.dicebear.com/7.x/identicon/svg?seed=marketing', 5),
    ('c3c65113-9f48-611d-13d4-d0f2d0f0c3f4', 'Design Team', 'Product design and UX', 'private', 'https://api.dicebear.com/7.x/identicon/svg?seed=design', 8);

-- Add team members
INSERT INTO team_members (team_id, user_id, role)
VALUES
    -- Engineering Team
    ('a1a43991-7e26-499b-91b2-b8f0b8d8a1d2', 'd0d54aa8-9e37-4aa9-a1b2-b8f0b8d8a1d2', 'owner'),
    ('a1a43991-7e26-499b-91b2-b8f0b8d8a1d2', 'e1e65bb9-0f48-5bb3-b2c3-c9f1c9e9b2e3', 'admin'),
    ('a1a43991-7e26-499b-91b2-b8f0b8d8a1d2', 'f2f76cc0-1f59-6cc4-c3d4-d0f2d0f0c3f4', 'member'),
    
    -- Marketing Team
    ('b2b54002-8f37-500c-02c3-c9f1c9e9b2e3', 'e1e65bb9-0f48-5bb3-b2c3-c9f1c9e9b2e3', 'owner'),
    ('b2b54002-8f37-500c-02c3-c9f1c9e9b2e3', 'f2f76cc0-1f59-6cc4-c3d4-d0f2d0f0c3f4', 'member'),
    
    -- Design Team
    ('c3c65113-9f48-611d-13d4-d0f2d0f0c3f4', 'f2f76cc0-1f59-6cc4-c3d4-d0f2d0f0c3f4', 'owner'),
    ('c3c65113-9f48-611d-13d4-d0f2d0f0c3f4', 'd0d54aa8-9e37-4aa9-a1b2-b8f0b8d8a1d2', 'admin');

-- Add sample team invitations
INSERT INTO team_invitations (id, team_id, inviter_id, invitee_email, role, status, expires_at)
VALUES
    ('d4d76224-0f59-722e-24e5-e1f3e1f1d4f5', 'a1a43991-7e26-499b-91b2-b8f0b8d8a1d2', 'd0d54aa8-9e37-4aa9-a1b2-b8f0b8d8a1d2', 'alice@example.com', 'member', 'pending', now() + interval '7 days'),
    ('e5e87335-1f60-833f-35f6-f2f4f2f2e5f6', 'b2b54002-8f37-500c-02c3-c9f1c9e9b2e3', 'e1e65bb9-0f48-5bb3-b2c3-c9f1c9e9b2e3', 'charlie@example.com', 'admin', 'pending', now() + interval '7 days'),
    ('f6f98446-2f71-944f-46f7-f3f5f3f3f6f7', 'c3c65113-9f48-611d-13d4-d0f2d0f0c3f4', 'f2f76cc0-1f59-6cc4-c3d4-d0f2d0f0c3f4', 'dave@example.com', 'member', 'pending', now() + interval '7 days');

-- Add team for user@example.com
INSERT INTO teams (id, name, description, visibility, avatar_url, max_members)
VALUES
    ('d4d76224-0f59-722e-24e5-e1f3e1f1d4e5', 'Personal Team', 'My personal workspace', 'private', 'https://api.dicebear.com/7.x/identicon/svg?seed=personal', 5)
ON CONFLICT (id) DO NOTHING;

-- Add team member entry for user@example.com
INSERT INTO team_members (team_id, user_id, role)
VALUES
    ('d4d76224-0f59-722e-24e5-e1f3e1f1d4e5', 'aec53558-767e-4408-b4d6-1c1e6f17ffe5', 'owner')
ON CONFLICT (team_id, user_id) DO NOTHING;

-- Re-enable user-defined triggers
alter table team_members enable trigger user;
alter table team_invitations enable trigger user;