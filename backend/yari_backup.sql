--
-- PostgreSQL database dump
--

\restrict 7QIXRjdKHvDcZ1PjRh3YWYrgBstYJ13uz8aZS0FyUhnc5eju02y2FDn6KFf32jy

-- Dumped from database version 17.4
-- Dumped by pg_dump version 18.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: about_content; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.about_content (
    id integer NOT NULL,
    section character varying(100) NOT NULL,
    title text,
    description text,
    image text,
    extra_data jsonb DEFAULT '{}'::jsonb,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: about_content_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.about_content_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: about_content_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.about_content_id_seq OWNED BY public.about_content.id;


--
-- Name: admin_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.admin_users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash text NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: admin_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.admin_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: admin_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.admin_users_id_seq OWNED BY public.admin_users.id;


--
-- Name: contact_info; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contact_info (
    id integer NOT NULL,
    company_name character varying(255),
    email character varying(255),
    phone character varying(100),
    address text,
    map_url text,
    whatsapp character varying(100),
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: contact_info_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contact_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contact_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contact_info_id_seq OWNED BY public.contact_info.id;


--
-- Name: contact_messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contact_messages (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(100),
    subject character varying(255),
    message text NOT NULL,
    status character varying(50) DEFAULT 'new'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: contact_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contact_messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contact_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contact_messages_id_seq OWNED BY public.contact_messages.id;


--
-- Name: gallery; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.gallery (
    id integer NOT NULL,
    title character varying(255),
    description text,
    image text NOT NULL,
    sort_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: gallery_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.gallery_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: gallery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.gallery_id_seq OWNED BY public.gallery.id;


--
-- Name: home_content; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.home_content (
    id integer NOT NULL,
    section character varying(100) NOT NULL,
    title text,
    description text,
    image text,
    extra_data jsonb DEFAULT '{}'::jsonb,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: home_content_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.home_content_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: home_content_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.home_content_id_seq OWNED BY public.home_content.id;


--
-- Name: industries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.industries (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    description text,
    image text,
    features jsonb DEFAULT '[]'::jsonb,
    sort_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: industries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.industries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: industries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.industries_id_seq OWNED BY public.industries.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    description text,
    image text,
    features jsonb DEFAULT '[]'::jsonb,
    sort_order integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: about_content id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_content ALTER COLUMN id SET DEFAULT nextval('public.about_content_id_seq'::regclass);


--
-- Name: admin_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.admin_users ALTER COLUMN id SET DEFAULT nextval('public.admin_users_id_seq'::regclass);


--
-- Name: contact_info id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_info ALTER COLUMN id SET DEFAULT nextval('public.contact_info_id_seq'::regclass);


--
-- Name: contact_messages id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_messages ALTER COLUMN id SET DEFAULT nextval('public.contact_messages_id_seq'::regclass);


--
-- Name: gallery id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gallery ALTER COLUMN id SET DEFAULT nextval('public.gallery_id_seq'::regclass);


--
-- Name: home_content id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.home_content ALTER COLUMN id SET DEFAULT nextval('public.home_content_id_seq'::regclass);


--
-- Name: industries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries ALTER COLUMN id SET DEFAULT nextval('public.industries_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Data for Name: about_content; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.about_content (id, section, title, description, image, extra_data, updated_at) FROM stdin;
\.


--
-- Data for Name: admin_users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.admin_users (id, name, email, password_hash, is_active, created_at, updated_at) FROM stdin;
1	YARI Administrator	admin@yari.com	$2b$12$egLqGHUTOuG5ZAunEzAp7uErP4J.MbpkBDnOTnOeJC3w8buYk/HAe	t	2026-09-12 16:09:24.298	2026-09-12 16:09:24.298
\.


--
-- Data for Name: contact_info; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.contact_info (id, company_name, email, phone, address, map_url, whatsapp, updated_at) FROM stdin;
1	YARI DESIGN & MANUFACTURING SERVICES	yari.innovative@gmail.com	\N	No. 4/86, 3rd Cross Street, A.G.S. Colony, Velachery, Chennai, Tamil Nadu - 600042.	\N	\N	2026-09-12 15:57:44.796373
\.


--
-- Data for Name: contact_messages; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.contact_messages (id, name, email, phone, subject, message, status, created_at, updated_at) FROM stdin;
1	asDvSDCC	hariharanp186@gmail.com	9876554328	Engineering Design - AWRRGARRARAERRF	AERRGAEERGAGAERGG	new	2026-09-12 19:28:15.962536	2026-09-12 19:28:15.962536
2	nivetha	nivetha@gmail.com	9345764991	Engineering Design - kauhhasbdclhhhasdlicacassffvafv	assfdvasffvafvadfvaffvadfvf	new	2026-09-12 19:29:21.578939	2026-09-12 19:29:21.578939
3	arun	hariharanp186@gmail.com	34534434455	Machinery & Equipment - adrvadfdfvadfdvdfdfv	addffvadfvadfdv	new	2026-09-15 12:48:42.079824	2026-09-15 12:48:42.079824
\.


--
-- Data for Name: gallery; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.gallery (id, title, description, image, sort_order, is_active, created_at, updated_at) FROM stdin;
1	Industrial Manufacturing	Industrial manufacturing and engineering application.	https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=90	1	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
2	Engineering & Fabrication	Engineering and fabrication application.	https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=90	2	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
3	Industrial Equipment	Industrial equipment and manufacturing application.	https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=90	3	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
4	Metal Fabrication	Metal fabrication and industrial manufacturing application.	https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=90	4	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
5	Manufacturing Solutions	Engineering and manufacturing solution.	https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1000&q=90	5	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
\.


--
-- Data for Name: home_content; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.home_content (id, section, title, description, image, extra_data, updated_at) FROM stdin;
\.


--
-- Data for Name: industries; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.industries (id, title, slug, description, image, features, sort_order, is_active, created_at, updated_at) FROM stdin;
2	Machinery & Equipment	machinery-equipment	Manufacturing solutions for machinery, equipment and industrial applications.	https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=90	["Machinery components", "Fabricated components", "Custom manufacturing"]	2	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
3	Industrial Engineering	industrial-engineering	Engineering, fabrication and manufacturing solutions for industrial applications.	https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=90	["CAD & design solutions", "Industrial components", "Engineering applications"]	3	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
4	Aerospace	aerospace	Precision engineering and manufacturing support for aerospace applications.	https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90	["Precision manufacturing", "Engineered components", "Quality-focused production"]	4	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
5	Medical & Healthcare Equipment	medical-healthcare-equipment	Engineering and manufacturing solutions for medical and healthcare equipment applications.	https://images.unsplash.com/photo-1581093458791-9d42e3c5b6c6?auto=format&fit=crop&w=1400&q=90	["Precision components", "Custom engineering", "Reliable manufacturing"]	5	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
1	Automotive & Engineering	automotive-engineering	Engineering and manufacturing solutions for automotive and engineering applications.	/uploads/1789222260802-prrrrrr.png	["Precision components", "Engineering support", "Reliable manufacturing"]	1	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products (id, title, slug, description, image, features, sort_order, is_active, created_at, updated_at) FROM stdin;
1	CNC Machined Metal Parts	cnc-machined-metal-parts	Precision CNC machined metal parts manufactured for demanding engineering and industrial applications.	https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=90	["Precision machining", "Consistent quality", "Custom component manufacturing"]	1	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
2	Fabricated Metal Components	fabricated-metal-components	Custom fabricated metal components developed for industrial machinery and engineering applications.	https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=90	["Metal fabrication", "Custom dimensions", "Industrial applications"]	2	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
3	Sheet Metal Components	sheet-metal-components	Precision sheet metal components manufactured for a wide range of industrial applications.	https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1400&q=90	["Sheet metal fabrication", "Precision forming", "Custom components"]	3	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
4	Machinery Components	machinery-components	Reliable machinery components engineered and manufactured for industrial equipment.	https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90	["Industrial machinery parts", "Engineering support", "Reliable production"]	4	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
5	Automotive Components	automotive-components	Engineered automotive components manufactured for precision, reliability and performance.	https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=90	["Automotive applications", "Precision components", "Quality manufacturing"]	5	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
6	Engineered Components	engineered-components	Custom engineered components developed to meet specific industrial and manufacturing requirements.	https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=90	["Custom engineering", "Application-specific components", "Precision manufacturing"]	6	t	2026-09-12 15:57:44.796373	2026-09-12 15:57:44.796373
\.


--
-- Name: about_content_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.about_content_id_seq', 1, false);


--
-- Name: admin_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.admin_users_id_seq', 1, true);


--
-- Name: contact_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contact_info_id_seq', 1, true);


--
-- Name: contact_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contact_messages_id_seq', 3, true);


--
-- Name: gallery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.gallery_id_seq', 6, true);


--
-- Name: home_content_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.home_content_id_seq', 1, false);


--
-- Name: industries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.industries_id_seq', 7, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 8, true);


--
-- Name: about_content about_content_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_content
    ADD CONSTRAINT about_content_pkey PRIMARY KEY (id);


--
-- Name: about_content about_content_section_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.about_content
    ADD CONSTRAINT about_content_section_key UNIQUE (section);


--
-- Name: admin_users admin_users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_email_key UNIQUE (email);


--
-- Name: admin_users admin_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_pkey PRIMARY KEY (id);


--
-- Name: contact_info contact_info_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_info
    ADD CONSTRAINT contact_info_pkey PRIMARY KEY (id);


--
-- Name: contact_messages contact_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_messages
    ADD CONSTRAINT contact_messages_pkey PRIMARY KEY (id);


--
-- Name: gallery gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gallery
    ADD CONSTRAINT gallery_pkey PRIMARY KEY (id);


--
-- Name: home_content home_content_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.home_content
    ADD CONSTRAINT home_content_pkey PRIMARY KEY (id);


--
-- Name: home_content home_content_section_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.home_content
    ADD CONSTRAINT home_content_section_key UNIQUE (section);


--
-- Name: industries industries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries
    ADD CONSTRAINT industries_pkey PRIMARY KEY (id);


--
-- Name: industries industries_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.industries
    ADD CONSTRAINT industries_slug_key UNIQUE (slug);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: products products_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_slug_key UNIQUE (slug);


--
-- PostgreSQL database dump complete
--

\unrestrict 7QIXRjdKHvDcZ1PjRh3YWYrgBstYJ13uz8aZS0FyUhnc5eju02y2FDn6KFf32jy

