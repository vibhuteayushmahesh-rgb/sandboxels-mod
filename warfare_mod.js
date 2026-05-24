// ============================
// SAFE WARFARE MOD (FIXED)
// ============================

// ---------- SOLDIER ----------
elements.india_soldier = {
    color: "#FF9933",
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        // simple movement (SAFE)
        if (Math.random() < 0.5) {
            pixel.x += Math.random() < 0.5 ? -1 : 1;
        }

        // simple attack (no pixelMap scanning abuse)
        if (Math.random() < 0.03) {
            createPixel("fire", pixel.x + 1, pixel.y);
        }
    }
};

// ---------- ENEMY SOLDIER ----------
elements.enemy_soldier = {
    color: "#990000",
    category: "warfare",
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
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        if (Math.random() < 0.2) {
            pixel.x += 1;
        }

        // SAFE explosion (correct function)
        if (Math.random() < 0.02) {
            explode(pixel.x + 1, pixel.y, 4);
        }
    }
};

// ---------- MISSILE ----------
elements.missile = {
    color: "#888888",
    category: "warfare",
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
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        pixel.x += 1;

        if (Math.random() < 0.08) {
            createPixel("missile", pixel.x, pixel.y + 1);
        }
    }
};

// ---------- TSAR BOMB (FIXED) ----------
elements.tsar_bomb = {
    color: "#333333",
    category: "warfare",
    state: "solid",

    tick: function(pixel) {

        if (pixel.temp > 120 || Math.random() < 0.001) {

            // SAFE explosion (no explodeAt)
            explode(pixel.x, pixel.y, 30);

            // radiation effect
            createPixel("radiation", pixel.x, pixel.y);

            deletePixel(pixel.x, pixel.y);
        }
    }
};
