require("dotenv").config();

const pool = require("../config/database");


/* =========================================================
   YARI SEED DATA
   ========================================================= */

const industries = [
  {
    title: "Automotive & Engineering",
    slug: "automotive-engineering",
    description:
      "Engineering and manufacturing solutions for automotive and engineering applications.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Precision components",
      "Engineering support",
      "Reliable manufacturing",
    ],
    sort_order: 1,
  },
  {
    title: "Machinery & Equipment",
    slug: "machinery-equipment",
    description:
      "Manufacturing solutions for machinery, equipment and industrial applications.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Machinery components",
      "Fabricated components",
      "Custom manufacturing",
    ],
    sort_order: 2,
  },
  {
    title: "Industrial Engineering",
    slug: "industrial-engineering",
    description:
      "Engineering, fabrication and manufacturing solutions for industrial applications.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=90",
    features: [
      "CAD & design solutions",
      "Industrial components",
      "Engineering applications",
    ],
    sort_order: 3,
  },
  {
    title: "Aerospace",
    slug: "aerospace",
    description:
      "Precision engineering and manufacturing support for aerospace applications.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Precision manufacturing",
      "Engineered components",
      "Quality-focused production",
    ],
    sort_order: 4,
  },
  {
    title: "Medical & Healthcare Equipment",
    slug: "medical-healthcare-equipment",
    description:
      "Engineering and manufacturing solutions for medical and healthcare equipment applications.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c5b6c6?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Precision components",
      "Custom engineering",
      "Reliable manufacturing",
    ],
    sort_order: 5,
  },
];


const products = [
  {
    title: "CNC Machined Metal Parts",
    slug: "cnc-machined-metal-parts",
    description:
      "Precision CNC machined metal parts manufactured for demanding engineering and industrial applications.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Precision machining",
      "Consistent quality",
      "Custom component manufacturing",
    ],
    sort_order: 1,
  },
  {
    title: "Fabricated Metal Components",
    slug: "fabricated-metal-components",
    description:
      "Custom fabricated metal components developed for industrial machinery and engineering applications.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Metal fabrication",
      "Custom dimensions",
      "Industrial applications",
    ],
    sort_order: 2,
  },
  {
    title: "Sheet Metal Components",
    slug: "sheet-metal-components",
    description:
      "Precision sheet metal components manufactured for a wide range of industrial applications.",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Sheet metal fabrication",
      "Precision forming",
      "Custom components",
    ],
    sort_order: 3,
  },
  {
    title: "Machinery Components",
    slug: "machinery-components",
    description:
      "Reliable machinery components engineered and manufactured for industrial equipment.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Industrial machinery parts",
      "Engineering support",
      "Reliable production",
    ],
    sort_order: 4,
  },
  {
    title: "Automotive Components",
    slug: "automotive-components",
    description:
      "Engineered automotive components manufactured for precision, reliability and performance.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Automotive applications",
      "Precision components",
      "Quality manufacturing",
    ],
    sort_order: 5,
  },
  {
    title: "Engineered Components",
    slug: "engineered-components",
    description:
      "Custom engineered components developed to meet specific industrial and manufacturing requirements.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Custom engineering",
      "Application-specific components",
      "Precision manufacturing",
    ],
    sort_order: 6,
  },
];


const gallery = [
  {
    title: "Industrial Manufacturing",
    description:
      "Industrial manufacturing and engineering application.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=90",
    sort_order: 1,
  },
  {
    title: "Engineering & Fabrication",
    description:
      "Engineering and fabrication application.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=90",
    sort_order: 2,
  },
  {
    title: "Industrial Equipment",
    description:
      "Industrial equipment and manufacturing application.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=90",
    sort_order: 3,
  },
  {
    title: "Metal Fabrication",
    description:
      "Metal fabrication and industrial manufacturing application.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=90",
    sort_order: 4,
  },
  {
    title: "Manufacturing Solutions",
    description:
      "Engineering and manufacturing solution.",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1000&q=90",
    sort_order: 5,
  },
];


/* =========================================================
   CONTACT INFORMATION
   ========================================================= */

const contactInfo = {
  company_name: "YARI DESIGN & MANUFACTURING SERVICES",
  email: "yari.innovative@gmail.com",
  phone: null,
  address:
    "No. 4/86, 3rd Cross Street, A.G.S. Colony, Velachery, Chennai, Tamil Nadu - 600042.",
  map_url: null,
  whatsapp: null,
};


/* =========================================================
   SEED FUNCTION
   ========================================================= */

const seedDatabase = async () => {
  const client = await pool.connect();

  try {
    console.log("Starting YARI database seed...");

    await client.query("BEGIN");


    /* -------------------------------------------------------
       CLEAR INITIAL CONTENT
    ------------------------------------------------------- */

    await client.query("DELETE FROM industries");
    await client.query("DELETE FROM products");
    await client.query("DELETE FROM gallery");
    await client.query("DELETE FROM home_content");
    await client.query("DELETE FROM about_content");
    await client.query("DELETE FROM contact_info");


    /* -------------------------------------------------------
       INDUSTRIES
    ------------------------------------------------------- */

    for (const industry of industries) {
      await client.query(
        `INSERT INTO industries
        (title, slug, description, image, features, sort_order)
        VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          industry.title,
          industry.slug,
          industry.description,
          industry.image,
          JSON.stringify(industry.features),
          industry.sort_order,
        ]
      );
    }

    console.log(`Inserted ${industries.length} industries`);


    /* -------------------------------------------------------
       PRODUCTS
    ------------------------------------------------------- */

    for (const product of products) {
      await client.query(
        `INSERT INTO products
        (title, slug, description, image, features, sort_order)
        VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          product.title,
          product.slug,
          product.description,
          product.image,
          JSON.stringify(product.features),
          product.sort_order,
        ]
      );
    }

    console.log(`Inserted ${products.length} products`);


    /* -------------------------------------------------------
       GALLERY
    ------------------------------------------------------- */

    for (const item of gallery) {
      await client.query(
        `INSERT INTO gallery
        (title, description, image, sort_order)
        VALUES ($1, $2, $3, $4)`,
        [
          item.title,
          item.description,
          item.image,
          item.sort_order,
        ]
      );
    }

    console.log(`Inserted ${gallery.length} gallery images`);


    /* -------------------------------------------------------
       CONTACT INFORMATION
    ------------------------------------------------------- */

    await client.query(
      `INSERT INTO contact_info
      (company_name, email, phone, address, map_url, whatsapp)
      VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        contactInfo.company_name,
        contactInfo.email,
        contactInfo.phone,
        contactInfo.address,
        contactInfo.map_url,
        contactInfo.whatsapp,
      ]
    );

    console.log("Inserted contact information");


    await client.query("COMMIT");

    console.log("");
    console.log("========================================");
    console.log("YARI DATABASE SEED COMPLETED");
    console.log("========================================");
    console.log(`Industries : ${industries.length}`);
    console.log(`Products   : ${products.length}`);
    console.log(`Gallery    : ${gallery.length}`);
    console.log("Contact    : 1");
    console.log("========================================");
  } catch (error) {
    await client.query("ROLLBACK");

    console.error("");
    console.error("YARI database seed failed.");
    console.error(error);
  } finally {
    client.release();
    await pool.end();
  }
};


seedDatabase();