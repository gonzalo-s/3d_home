import { Ye, xe } from '../../legacy/three-runtime.js';

export function createMaterials() {
  const materials = { wall: new xe({ color: 16250092, roughness: 0.9 }), floor: new xe({ color: 12494216, roughness: 0.9, side: Ye }), tile: new xe({ color: 11646392, roughness: 0.8 }), white: new xe({ color: 16777215 }), wood: new xe({ color: 7492418 }), glass: new xe({ color: 8963796, transparent: true, opacity: 0.35, roughness: 0.1 }), blue: new xe({ color: 5011608 }) };
  materials.facade = new xe({ color: 13285782, roughness: 0.95 });
  materials.metal = new xe({ color: 5593952, metalness: 0.45, roughness: 0.55 });
  materials.grayFloor = new xe({ color: 11183774, roughness: 0.88 });
  materials.terracotta = new xe({ color: 12022096, roughness: 0.95 });
  materials.grass = new xe({ color: 5538363, roughness: 1 });
  materials.leaves = new xe({ color: 4811318, roughness: 1 });
  materials.redLeaves = new xe({ color: 7954507, roughness: 1 });
  materials.dark = new xe({ color: 3158836, roughness: 0.85 });
  materials.cover = new xe({ color: 12962245, transparent: true, opacity: 0.48, side: Ye, roughness: 0.5 });
  return materials;
}
