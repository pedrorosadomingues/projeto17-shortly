--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL,
    "totalClicks" integer DEFAULT 0 NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(20) NOT NULL,
    password text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (24, 'https://www.notion.so/asdabootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6gfhjdffdfgfdb8e3', 's-hb:', 1, '2023-02-18', 0);
INSERT INTO public.urls VALUES (26, 'https://www.notion.so/asdabootcampra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6gfasdhjdffdfgfdb8e3', 'ws/id', 1, '2023-02-18', 0);
INSERT INTO public.urls VALUES (29, 'https://docs.google.com/spreadsheets/d/10kpg_v1LMip6Dh-0BbIj2VsZhKgQnU_hp3hu1lPlUoc/edit#gid=574073890', 'gdeh_', 1, '2023-02-18', 0);
INSERT INTO public.urls VALUES (17, 'https://www.notion.sodfg/bootcaaampgra/Projeto-17-Shortly-API-c306c707e7504d32a6asda89e0ff6dffsdfsbdfg8ea3', '7orwr', 1, '2023-02-18', 1);
INSERT INTO public.urls VALUES (31, 'https://www.google.com/', 'wp:t/', 2, '2023-02-22', 0);
INSERT INTO public.urls VALUES (32, 'https://www.globo.com/', 'gc/oh', 2, '2023-02-22', 0);
INSERT INTO public.urls VALUES (10, 'https://www.notion.so/bootcaaampgra/Projeto-17-Shortly-API-c306c707e7504d32a689e0ff6dffbdfg8e3', 'ct6Ay', 1, '2023-02-18', 2);
INSERT INTO public.urls VALUES (33, 'https://www.instagram.com/', 'ShRjBj9GIhpbrcUnMovvz', 2, '2023-02-22', 7);
INSERT INTO public.urls VALUES (34, 'https://www.facebook.com/', 'NmBl3WPi', 3, '2023-02-22', 10);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', '$2b$10$uhZLXfUne52e7ELc382HbOzH4f1QxNuX4R4ZtU5KDdWyO6U6sm5KK', '2023-02-18');
INSERT INTO public.users VALUES (2, 'João', 'joao2@driven.com.br', '$2b$10$fmY7kENaD4HvN1C.sYf9.e3av.1HdaeIKye8dKi8LOcoAowUUUtdq', '2023-02-21');
INSERT INTO public.users VALUES (3, 'João3', 'joao3@driven.com.br', '$2b$10$4pV0kFdf39QVMQtDdXRw5OuQk5c10UbZ52fsTI1mpFi3xmWxSl9by', '2023-02-22');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 34, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: urls urls_url_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_url_key UNIQUE (url);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--
create database shortlydb;

CREATE TABLE users (
    id serial primary key,
    name varchar(50) NOT NULL,
    email varchar(20) NOT NULL unique,
    password TEXT NOT NULL,
    "createdAt" date NOT NULL default now()
);

CREATE TABLE urls (
    id serial primary key,
    url TEXT NOT NULL unique,
    "shortUrl" TEXT NOT NULL unique,
    "userId" integer NOT NULL REFERENCES users(id),
    "createdAt" date NOT NULL default now(),
    "totalClicks" integer NOT NULL default 0
);
