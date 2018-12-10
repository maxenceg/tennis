<?php
// api/src/Entity/Club.php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * A club.
 *
 * @ORM\Entity
 * @ApiResource
 */
class Club
{
    /**
     * @var int The id of this club.
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(name="id", type="integer")
     */
    private $id;

    /**
     * @var string The name of this club.
     *
     * @ORM\Column(name="name", type="text")
     */
    public $name;

    /**
     * @var int The court size of this club.
     *
     * @ORM\Column(name="courtSize", type="integer")
     */
    public $courtSize;

    /**
     * @var TennisCourt[] Available tennis courts for this club.
     *
     * @ORM\OneToMany(targetEntity="TennisCourt", mappedBy="club")
     */
    public $tennisCourts;
    
    public function __construct()
    {
        $this->tennisCourts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
}