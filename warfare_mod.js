// ============================
// FIXED WARFARE MOD (CLEAN)
// ============================

// ---------- INDIA SOLDIER ----------
elements.india_soldier = {
    color: "#FF9933",
    category: "weapons",
    state: "solid",

    tick: function(pixel) {

        // simple movement
        if (Math.random() < 0.5) {
            pixel.x += Math.random() < 0.5 ? -1 : 1;
        }

        // simple attack effect
        if (Math.random() < 0.03) {
            createPixel("fire", pixel.x + 1, pixel.y);
        }
    }
};

// ---------- ENEMY SOLDIER ----------
elements.enemy_soldier = {
    color: "#990000",
    category: "weapons",
    state: "solid",

    tick: function(pixel) {

        if (Math.random() < 0.5) {
            pixel.x += Math.random() < 0.5 ? -1 : 1;
        }

        if (Math.random() < 0.03) {
            createPixel("fire", pixel.x - 1, pixel.y);
        }
    }
};

// ---------- TANK ----------
elements.tank = {
    color: "#556B2F",
    category: "weapons",
    state: "solid",

    tick: function(pixel) {

        if (Math.random() < 0.2) {
            pixel.x += 1;
        }

        if (Math.random() < 0.02) {
            explode(pixel.x + 1, pixel.y, 4);
        }
    }
};

// ---------- MISSILE ----------
elements.missile = {
    color: "#888888",
    category: "weapons",
    state: "solid",

    tick: function(pixel) {

        pixel.y -= 1;

        if (Math.random() < 0.03) {
            explode(pixel.x, pixel.y, 6);
            deletePixel(pixel.x, pixel.y);
        }
    }
};

// ---------- BOMBER PLANE ----------
elements.bomber_plane = {
    color: "#777777",
    category: "weapons",
    state: "solid",

    tick: function(pixel) {

        pixel.x += 1;

        if (Math.random() < 0.08) {
            createPixel("missile", pixel.x, pixel.y + 1);
        }
    }
};

// ---------- TSAR BOMB ----------
elements.tsar_bomb = {
    color: "#222222",
    category: "weapons",
    state: "solid",

    tick: function(pixel) {

        if (pixel.temp > 120 || Math.random() < 0.001) {

            // big explosion
            explode(pixel.x, pixel.y, 30);

            // radiation effect
            createPixel("radiation", pixel.x, pixel.y);

            deletePixel(pixel.x, pixel.y);
        }
    }
};
