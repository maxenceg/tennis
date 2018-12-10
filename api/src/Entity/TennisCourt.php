<?php
// api/src/Entity/TennisCourt.php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * A tennis court.
 *
 * @ORM\Entity
 * @ApiResource
 */
class TennisCourt
{
    /**
     * @var int The id of this tennis court.
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(name="id", type="integer")
     */
    private $id;

    /**
     * @var string the name of the tennis court.
     *
     * @ORM\Column(name="name", type="text", nullable=true)
     */
    public $name;

    /**
     * @var string the type of the tennis court.
     *
     * @ORM\Column(name="type", type="text")
     */
    public $type;

    /**
     * @var int The x coordinate of this tennis court.
     *
     * @ORM\Column(name="x", type="integer")
     */
    public $x;

    /**
     * @var int The y coordinate of this tennis court.
     *
     * @ORM\Column(name="y", type="integer")
     */
    public $y;

    /**
     * @var int The inclination of this tennis court.
     *
     * @ORM\Column(name="inclination", type="integer")
     */
    public $inclination;

    /**
     * @var Club The club this tennis court is part of.
     *
     * @ORM\ManyToOne(targetEntity="Club", inversedBy="tennisCourts")
     */
    public $club;

    public function getId(): ?int
    {
        return $this->id;
    }
}